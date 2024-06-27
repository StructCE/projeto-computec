import { TouchableOpacity } from "react-native";
import { View, Text, XStack, YStack } from "tamagui";
import CloudImage from "@/utils/cloudinary";
import { router } from "expo-router";

type dataNotificationList = {
  id: string;
  img: string;
  title: string;
  dateNotification: string;
};

const CardNotification = (props: dataNotificationList) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: "/(tabs)/post", params: { id: props.id } })
      }
    >
      <View marginVertical="$1.5" marginHorizontal="$5">
        <XStack>
          <View>
            <CloudImage
              style={{
                borderTopLeftRadius: 10,
                marginRight: 2,
                width: 75,
                height: 90,
                backgroundColor: "gray",
                borderBottomLeftRadius: 10,
              }}
              public_id={props.img}
            />
          </View>
          <YStack fd={"column"} marginLeft="$2">
            <Text
              flex={1}
              paddingRight="$11"
              color={"#1B1B1B"}
              style={{
                fontFamily: "MavenProMedium",
              }}
              fontSize={14}
            >
              {props.title}
            </Text>
            <Text
              color={"#1B1B1B"}
              fontSize={13}
              style={{
                fontFamily: "MavenProRegular",
              }}
            >
              Clique para ver mais.
            </Text>
            <Text
              color={"#B1B1B1"}
              fontSize={12}
              style={{
                fontFamily: "MavenProMedium",
              }}
            >
              {props.dateNotification}
            </Text>
          </YStack>
        </XStack>
      </View>
    </TouchableOpacity>
  );
};

export default CardNotification;
