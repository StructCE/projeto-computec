import { TouchableOpacity, Linking } from "react-native";
import { Text, View } from "tamagui";

export function ScheduleEventCard({
  eventName,
  eventLocation,
  eventBackgroundColor,
  eventLink,
}: {
  eventName: string;
  eventLocation: string | null;
  eventBackgroundColor: string;
  eventLink: string | null;
}) {
  const handlePress = () => {
    if (!eventLink) return;
    Linking.openURL(eventLink).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const CardContent = (
    <View
      style={{
        backgroundColor: eventBackgroundColor,
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
        {eventName}
      </Text>
      {eventLocation && (
        <Text
          style={{
            color: "white",
            fontFamily: "MavenProRegular",
            fontSize: 15,
          }}
        >
          Sala: {eventLocation}
        </Text>
      )}
    </View>
  );

  return eventLink ? (
    <TouchableOpacity onPress={handlePress}>{CardContent}</TouchableOpacity>
  ) : (
    <>{CardContent}</>
  );
}
