import { View, XStack, Text } from "tamagui";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import {
  MavenPro_600SemiBold,
  MavenPro_400Regular,
  MavenPro_700Bold,
} from "@expo-google-fonts/maven-pro";
import CardNotification from "@/src/components/CardNotification";

type NotificationItem = {
  image: string;
  title: string;
  date: string;
};

type GroupedNotifications = {
  [key: string]: NotificationItem[];
};

export default function ListNotification() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    MavenPro_600SemiBold,
    MavenPro_400Regular,
    MavenPro_700Bold,
  });
  if (!fontsLoaded) {
    return;
  }

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
  // Calcula e formata a diferença de tempo relativa entre a data atual e a do array de obj
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

  const items: NotificationItem[] = [
    {
      image:
        "https://img.freepik.com/free-photo/matrix-hacker-background_23-2150082005.jpg",
      title: "5º Curso de Qualidade em Ensino de Computação na Educação Básica",
      date: formatDate(new Date("2024-06-16T11:20:00")),
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/05/56/29/10/360_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg",
      title:
        "4ª Maratona Brasileira de Programação para Projeto Automatizado de Circuitos Integrados",
      date: formatDate(new Date("2024-06-16T12:30:30")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "16º Simpósio Brasileiro de Computação Ubíqua e Pervasiva",
      date: formatDate(new Date("2024-06-16T13:00:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title:
        "9º Workshop sobre Aspectos Sociais, Humanos e Econômicos de Software",
      date: formatDate(new Date("2024-06-15T13:00:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title:
        "15º Workshop de Computação Aplicada à Gestão do Meio Ambiente e Recursos Naturais",
      date: formatDate(new Date("2024-06-14T13:00:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Testbeds",
      date: formatDate(new Date("2024-06-13T13:00:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Testbeds",
      date: formatDate(new Date("2024-06-12T13:00:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Bug cancelado!",
      date: formatDate(new Date("2024-06-16T16:10:00")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Bug",
      date: formatDate(new Date("2024-06-16T12:12:41")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Bug",
      date: formatDate(new Date("2024-06-15T12:12:41")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Coding",
      date: formatDate(new Date("2024-06-11T12:12:41")),
    },
    {
      image:
        "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg",
      title: "3º Workshop de Coding Coding Coding",
      date: formatDate(new Date("2024-06-13T12:12:41")),
    },
  ];

  // Para agrupar notificações
  const groupNotifications = (
    items: NotificationItem[]
  ): GroupedNotifications => {
    const today = new Date();
    const grouped: GroupedNotifications = {
      Hoje: [],
      Ontem: [],
      "Dois dias atrás": [],
      "Três dias atrás": [],
      "Quatro dias atrás": [],
      "Cinco dias atrás": [],
      "Seis dias atrás": [],
      "Mais de uma semana atrás": [],
    };

    items.forEach((item) => {
      const [datePart, timePart] = item.date.split(" ");
      const [day, month, year] = datePart.split("/").map(Number);
      const [hours, minutes, seconds] = timePart.split(":").map(Number);
      const itemDate = new Date(year, month - 1, day, hours, minutes, seconds);

      const diffTime = Math.abs(today.getTime() - itemDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Classifica as notificações em grupos baseados na diferença de dias
      grouped[
        diffDays <= 1
          ? "Hoje"
          : diffDays === 2
          ? "Ontem"
          : diffDays === 3
          ? "Dois dias atrás"
          : diffDays === 4
          ? "Três dias atrás"
          : diffDays === 5
          ? "Quatro dias atrás"
          : diffDays === 6
          ? "Cinco dias atrás"
          : diffDays === 7
          ? "Seis dias atrás"
          : "Mais de uma semana atrás"
      ].push(item);
    });

    // Ordena as notificações das mais recentes para as mais antigas
    for (const group in grouped) {
      grouped[group].sort((a, b) => {
        const dateA = new Date(
          a.date.split(" ")[0].split("/").reverse().join("-") +
            "T" +
            a.date.split(" ")[1]
        );
        const dateB = new Date(
          b.date.split(" ")[0].split("/").reverse().join("-") +
            "T" +
            b.date.split(" ")[1]
        );
        return dateB.getTime() - dateA.getTime();
      });
    }

    return grouped;
  };

  const groupedItems = groupNotifications(items);

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
            style={styles.mavenProBold}
          >
            Notificações
          </Text>
        </XStack>
      </XStack>
      <ScrollView>
        <View>
          {Object.keys(groupedItems).map((group, index) => (
            <View key={index}>
              {groupedItems[group].length > 0 && (
                <>
                  <View my={"$2"} w={"100%"} height={1} bg={"#E6E6E6"} />
                  <Text
                    marginLeft="$5"
                    marginTop="$1"
                    marginBottom="$2"
                    color={"#FCAF3D"}
                    style={styles.mavenProSemiBold}
                  >
                    {group}
                  </Text>

                  {groupedItems[group].map((item, idx) => (
                    <CardNotification
                      key={idx}
                      img={item.image}
                      title={item.title}
                      dateNotification={formatRelativeTime(
                        new Date(
                          item.date
                            .split(" ")[0]
                            .split("/")
                            .reverse()
                            .join("-") +
                            "T" +
                            item.date.split(" ")[1]
                        )
                      )}
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

const styles = StyleSheet.create({
  mavenProSemiBold: {
    fontFamily: "MavenPro_600SemiBold",
  },

  mavenProRegular: {
    fontFamily: "MavenPro_400Regular",
  },

  mavenProBold: {
    fontFamily: "MavenPro_700Bold",
  },
});
