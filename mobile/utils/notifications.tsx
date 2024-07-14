import { useEffect, useRef } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import Constants from "expo-constants";
import { router } from "expo-router";

export const usePushNotifications = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: false,
      shouldShowAlert: true,
      shouldSetBadge: false,
    }),
  });

  const responseListener = useRef<Notifications.Subscription>();

  async function registerForPushNotificationsAsync() {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification");
        return;
      }

      const newToken = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra?.eas.projectId,
      });
      const oldToken = SecureStore.getItem("pushToken");
      if (newToken.data !== oldToken) {
        SecureStore.setItem("pushToken", newToken.data);
      }
      return {
        newToken,
        oldToken,
      };
    } else {
      alert("Must be using a physical device for Push notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    return;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) {
        fetch(`${process.env.EXPO_PUBLIC_API_URL}/setPushToken`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newToken: token.newToken.data,
            oldToken: token.oldToken,
          }),
        });
      }
    });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const post_id = response.notification.request.content.data.post_id;
        if (post_id) {
          setTimeout(() => {
            router.push({
              pathname: "/(tabs)/posts",
              params: { id: post_id },
            });
          }, 1000);
        }
      });

    return () => {
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, []);
  return;
};
