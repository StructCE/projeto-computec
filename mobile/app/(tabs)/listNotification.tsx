import { View, XStack, Text, ScrollView } from "tamagui";
import { ChevronLeft } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CardNotification from "@/src/components/CardNotification";
import { api } from "@/utils/api";

export default function ListNotification() {
  const router = useRouter();
  const notifications = api.notification.getNotifications.useQuery();

  function formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals: { [key: string]: number } = {
      year: 31536000,
      month: 2592000,
      semana: 604800,
      dia: 86400,
      hora: 3600,
      minuto: 60,
      segundo: 1,
    };

    for (const interval in intervals) {
      const intervalInSeconds = intervals[interval];
      const count = Math.floor(diffInSeconds / intervalInSeconds);
      if (count >= 1) {
        return `${count} ${interval}${count !== 1 ? "s" : ""} atrás`;
      }
    }

    return "agora";
  }

  return (
    <>
      <XStack paddingHorizontal="$4" paddingBottom="$2">
        <TouchableOpacity onPress={router.back}>
          <ChevronLeft strokeWidth={2} size={32} color={"black"} />
        </TouchableOpacity>
        <XStack paddingHorizontal="$4" ai={"center"}>
          <Text
            marginLeft="$2"
            color={"#1B1B1B"}
            fontSize={16}
            style={{
              fontFamily: "MavenProBold",
            }}
          >
            Notificações
          </Text>
        </XStack>
      </XStack>
      <ScrollView>
        <View>
          {notifications.data &&
            notifications.data.map((group, index) => (
              <View key={index}>
                {group.notifications.length > 0 && (
                  <>
                    <View my={"$2"} w={"100%"} height={1} bg={"#E6E6E6"} />
                    <Text
                      marginLeft="$5"
                      marginTop="$1"
                      marginBottom="$2"
                      color={"#FCAF3D"}
                      style={{
                        fontFamily: "MavenProSemiBold",
                      }}
                    >
                      {group.datePast}
                    </Text>

                    {group.notifications.map((item, idx) => (
                      <CardNotification
                        key={idx}
                        id={item.id}
                        img={item.image}
                        title={item.title}
                        dateNotification={formatRelativeTime(item.created_at)}
                      />
                    ))}
                  </>
                )}
              </View>
            ))}
        </View>
      </ScrollView>
    </>
  );
}
