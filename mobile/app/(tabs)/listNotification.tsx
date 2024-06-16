import { View, XStack, Text } from "tamagui";
import { ChevronLeft } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import {
  MavenPro_600SemiBold,
  MavenPro_400Regular,
  MavenPro_700Bold,
} from "@expo-google-fonts/maven-pro";
import CardNotification from "@/src/components/CardNotification";

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
  return (
    <View>
      <XStack paddingHorizontal="$4" ai={"center"}>
        <TouchableOpacity onPress={router.back}>
          <ChevronLeft strokeWidth={2} size={32} color={"black"} />
        </TouchableOpacity>
        <Text
          marginLeft="$2"
          color={"#1B1B1B"}
          fontSize={16}
          style={styles.mavenProBold}
        >
          Notificações
        </Text>
      </XStack>
      <CardNotification
        img={
          "https://img.freepik.com/free-photo/matrix-hacker-background_23-2150082005.jpg"
        }
        title={"Maratona Brasileira"}
        dateNotification={"10 minutos atrás"}
      />

      <CardNotification
        img={
          "https://t3.ftcdn.net/jpg/05/56/29/10/360_F_556291020_q2ieMiOCKYbtoLITrnt7qcSL1LJYyWrU.jpg"
        }
        title={
          "Maratona Brasileira de Programação para Projeto Automatizado de Circuitos Integrados"
        }
        dateNotification={"10 minutos atrás"}
      />

      <CardNotification
        img={
          "https://s2-galileu.glbimg.com/tdmHdVvBWbtUu7VU9wBm1Sod9DA=/0x0:300x191/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/1/f/K2QU4kTwKd02oQoeDFAQ/329350313-ebd83a2a6a-n.jpg"
        }
        title={"Maratona Brasileira de Programação "}
        dateNotification={"10 minutos atrás"}
      />
    </View>
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
