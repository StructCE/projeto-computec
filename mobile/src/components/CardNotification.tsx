import { TouchableOpacity } from "react-native";
import { View, Text, XStack, YStack } from "tamagui";
import CloudImage, { cld } from "@/utils/cloudinary";
import { router } from "expo-router";
import { Notification } from "@/constants/interfaces/notification";
import { fill } from "@cloudinary/url-gen/actions/resize";

const CardNotification = (props: Notification) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({ pathname: "/(tabs)/post", params: { id: props.id } })
      }
    >
      <View marginVertical="$1.5" marginHorizontal="$5">
        <XStack>
          <View marginRight={2}>
            <CloudImage
              cloudImage={cld
                .image(props.image)
                .resize(fill().width(100).height(120))}
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
              {props.datePast}
            </Text>
          </YStack>
        </XStack>
      </View>
    </TouchableOpacity>
  );
};

export default CardNotification;
