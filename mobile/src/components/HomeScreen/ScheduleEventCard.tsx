import { Event } from "@/constants/interfaces/event";
import { TouchableOpacity } from "react-native";
import { Text, View } from "tamagui";
import * as Browser from "expo-web-browser";

export function ScheduleEventCard(event: Event) {
  const handlePress = () => {
    if (!event.link) return;
    Browser.openBrowserAsync(event.link).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const CardContent = (
    <View
      backgroundColor={event.color}
      alignItems="center"
      justifyContent="center"
      padding={8}
      borderRadius={4}
    >
      <Text
        color="white"
        fontSize={15}
        style={{
          fontFamily: "MavenProMedium",
        }}
      >
        {event.event}
      </Text>
      {event.local && (
        <Text
          color="white"
          fontSize={15}
          style={{
            fontFamily: "MavenProRegular",
          }}
        >
          Sala: {event.local}
        </Text>
      )}
    </View>
  );

  return event.link ? (
    <TouchableOpacity onPress={handlePress}>{CardContent}</TouchableOpacity>
  ) : (
    <>{CardContent}</>
  );
}
