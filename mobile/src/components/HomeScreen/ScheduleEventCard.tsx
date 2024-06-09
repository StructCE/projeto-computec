import { Text, View } from 'react-native';

export default function ScheduleEventCard({
  eventName,
  eventLocation,
  eventBackgroundColor,
  eventTextColor = 'white',
}: {
  eventName: string;
  eventLocation: string;
  eventBackgroundColor: string;
  eventTextColor?: string;
}) {
  return (
    <>
      {/* ToDo: transformar essa view em um link para o site do CSBC com informações do evento */}
      <View
        style={{
          backgroundColor: `${eventBackgroundColor}`,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 8,
          borderRadius: 4,
        }}
      >
        <Text style={{ fontWeight: '600', color: `${eventTextColor}` }}>
          {eventName}
        </Text>
        <Text style={{ color: `${eventTextColor}` }}>
          Sala: {eventLocation}
        </Text>
      </View>
    </>
  );
}
