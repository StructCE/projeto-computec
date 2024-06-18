import { Text, View, TouchableOpacity, Linking } from "react-native";

export default function ScheduleEventCard({
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

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: eventBackgroundColor,
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          borderRadius: 4,
        }}
      >
        <Text style={{ fontWeight: "600", color: "white" }}>{eventName}</Text>
        {eventLocation && (
          <Text style={{ color: "white" }}>Sala: {eventLocation}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
