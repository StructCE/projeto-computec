import { Tabs } from "expo-router";
import { Home, Map, ScrollText, BookOpenText } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/src/components/Header";
import {
  getFocusedRouteNameFromRoute,
  useNavigationState,
} from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function TabNavigationLayout() {
  const [currentRouteName, setCurrentRouteName] = useState("index");
  const navigationState = useNavigationState((state) => state);

  useEffect(() => {
    if (navigationState) {
      const route = navigationState.routes.find((r) => r.name === "(tabs)");
      const subRouteName = getFocusedRouteNameFromRoute(route) || "index";
      setCurrentRouteName(subRouteName);
    }
  }, [navigationState]);
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
          header: () => (
            <Header
              routeName={route.name as "index" | "map" | "anais" | "news"}
            />
          ),
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#CBC8C8",
          tabBarBackground: () => (
            <LinearGradient
              colors={["#a92227", "#ed7a17"]}
              start={{ x: 0, y: 1 }}
              locations={[0.4, 1]}
              style={{
                height: 70,
              }}
            />
          ),
          tabBarStyle: {
            height: `${8}%`,
            paddingBottom: `${2}%`,
            paddingTop: `${2}%`,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Início",
            tabBarIcon: ({ color }) => <Home size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: "Mapa",
            tabBarIcon: ({ color }) => <Map size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="anais"
          options={{
            title: "Anais",
            tabBarIcon: ({ color }) => <ScrollText size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: "Notícias",
            tabBarIcon: ({ color }) => <BookOpenText size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="admin/login"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="listNotification"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </>
  );
}
