import {
  MavenPro_400Regular,
  MavenPro_600SemiBold,
  MavenPro_500Medium,
} from "@expo-google-fonts/maven-pro";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import { View, Image, Text, XStack, YStack } from "tamagui";
import { StyleSheet } from "react-native";

type dataNotificationList = {
  img: String;
  title: String;
  dateNotification: String;
};

const CardNotification = (props: dataNotificationList) => {
  const [fontsLoaded] = useFonts({
    MavenPro_600SemiBold,
    MavenPro_400Regular,
    MavenPro_500Medium,
  });
  if (!fontsLoaded) {
    return;
  }

  return (
    <TouchableOpacity>
      <View marginVertical="$1.5" marginHorizontal="$5">
        <XStack>
          <View>
            <Image
              borderTopLeftRadius={10}
              marginRight={"$2"}
              width={75}
              height={90}
              bg={"gray"}
              borderBottomLeftRadius={10}
              source={{
                uri: `${props.img}`,
              }}
            />
          </View>
          <YStack fd={"column"}>
            <Text
              flex={1}
              paddingRight="$11"
              color={"#1B1B1B"}
              style={styles.mavenProMedium}
              fontSize={13}
            >
              {props.title}
            </Text>
            <Text
              color={"#1B1B1B"}
              fontSize={12}
              style={styles.mavenProRegular}
            >
              Clique para ver mais.
            </Text>
            <Text color={"#B1B1B1"} fontSize={11} style={styles.mavenProMedium}>
              {props.dateNotification}
            </Text>
          </YStack>
        </XStack>
      </View>
    </TouchableOpacity>
  );
};

export default CardNotification;

const styles = StyleSheet.create({
  mavenProSemiBold: {
    fontFamily: "MavenPro_600SemiBold",
  },

  mavenProRegular: {
    fontFamily: "MavenPro_400Regular",
  },

  mavenProMedium: {
    fontFamily: "MavenPro_500Medium",
  },
});
