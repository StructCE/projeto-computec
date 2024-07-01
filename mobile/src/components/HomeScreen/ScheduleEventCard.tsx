import { Event } from "@/constants/interfaces/event";
import { TouchableOpacity, Linking } from "react-native";
import { Text, View } from "tamagui";

export function ScheduleEventCard(event: Event) {
  const handlePress = () => {
    if (!event.link) return;
    Linking.openURL(event.link).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const CardContent = (
    <View
      style={{
        backgroundColor: event.color,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 4,
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          color: "white",
          fontFamily: "MavenProMedium",
          fontSize: 15,
        }}
      >
        {event.event}
      </Text>
      {event.local && (
        <Text
          style={{
            color: "white",
            fontFamily: "MavenProRegular",
            fontSize: 15,
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
