import { ArrowLeft, ArrowRight } from "@tamagui/lucide-icons";
import { useRef, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { ScrollView, View, XStack, YStack, Text } from "tamagui";
import CloudImage, { cld } from "@/utils/cloudinary";
import { BlurView } from "expo-blur";
import { Post } from "@/constants/interfaces/post";
import { fill } from "@cloudinary/url-gen/actions/resize";

const { height, width } = Dimensions.get("window");

export const PostImages = ({
  title,
  subtitle,
  created_at,
  images,
}: Pick<Post, "title" | "subtitle" | "created_at" | "images">) => {
  const scrollViewRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex - 1) * width,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (images && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    }
  };

  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        style={{
          width: width,
          height: height / 4,
          backgroundColor: "white",
        }}
      >
        {images.map((image) => {
          return (
            <CloudImage
              key={image}
              cloudImage={cld.image(image).resize(
                fill()
                  .width(width)
                  .height(height / 4)
              )}
            />
          );
        })}
      </ScrollView>

      <View
        position="absolute"
        right={16}
        top={20}
        backgroundColor="white"
        borderRadius={9}
        padding={8}
        alignItems="center"
        alignSelf="flex-end"
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
          {String(created_at.getDate()).padStart(2, "0")}/
          {String(created_at.getMonth() + 1).padStart(2, "0")}
        </Text>
      </View>
      <BlurView
        intensity={15}
        style={{
          position: "absolute",
          top: 60,
          width: width - width / 6,
          maxHeight: 120,
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
            {title}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "MavenProRegular",
              color: "white",
            }}
          >
            {subtitle}
          </Text>
        </YStack>
      </BlurView>
      <XStack
        justifyContent= "space-between"
        width={width}
        position= "absolute"
        bottom={16}
      >
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 25,
            left: 16,
          }}
          onPress={handlePrev}
        >
          <ArrowLeft size={22} color="white" strokeWidth={2} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: 25,
            right: 16,
          }}
          onPress={handleNext}
        >
          <ArrowRight size={22} color="white" strokeWidth={2} />
        </TouchableOpacity>
      </XStack>
    </View>
  );
};
