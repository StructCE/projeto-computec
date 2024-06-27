import CloudImage from "@/utils/cloudinary";
import { BlurView } from "expo-blur";
import { Dimensions, ImageBackground } from "react-native";
import { Text, View, XStack, YStack } from "tamagui";
import PopoverDelete from "./PopoverDelete";
import PopoverEdit from "./PopoverEdit";

type Post = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  created_at: Date;
  images: string[];
  dateTime: Date | null;
  local: string | null;
};
const { width, height } = Dimensions.get("window");

export function AdminNewsPageCard({ post }: { post: Post }) {
  const margin = 24;
  const imageWidth = width - 2 * margin;

  return (
    <View style={{ flex: 1, alignSelf: "center", position: "relative" }}>
      <CloudImage
        key={post.images[0]}
        public_id={post.images[0]}
        style={{
          width: imageWidth,
          height: height / 3.75,
          borderRadius: 20,
          padding: 12,
        }}
      />
      <View
        style={{
          position: "absolute",
          right: 12,
          top: 12,
          backgroundColor: "white",
          borderRadius: 9,
          padding: 8,
          alignItems: "center",
          alignSelf: "flex-end",
        }}
      >
        <Text style={{ fontSize: 12, fontFamily: "MavenProMedium" }}>
          Postado
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 13,
            fontFamily: "MavenProMedium",
          }}
        >
          {String(post.created_at.getDay()).padStart(2, "0")}/
          {String(post.created_at.getMonth()).padStart(2, "0")}
        </Text>
      </View>
      <BlurView
        intensity={15}
        style={{
          position: "absolute",
          top: "20%",
          width: width - width / 3,
          maxHeight: 160,
          overflow: "hidden",
          borderStartEndRadius: 20,
          borderEndEndRadius: 20,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderColor: "rgba(0, 0, 0, 0.01)",
          paddingLeft: 24,
          paddingRight: 12,
          paddingVertical: 20,
          marginVertical: 12,
          marginBottom: 20,
          borderTopRightRadius: 19,
          borderBottomRightRadius: 19,
        }}
      >
        <YStack style={{ gap: 6 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "MavenProSemiBold",
              color: "white",
            }}
          >
            {post.title}
          </Text>
        </YStack>
      </BlurView>
      <XStack
        style={{
          position: "absolute",
          bottom: 12,
          right: 12,
          alignItems: "center",
          alignSelf: "flex-end",
          gap: 6,
        }}
      >
        <PopoverDelete post={post}></PopoverDelete>
        <PopoverEdit post={post}></PopoverEdit>
      </XStack>
    </View>
  );
}
