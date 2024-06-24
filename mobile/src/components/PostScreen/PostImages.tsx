import { ArrowLeft, ArrowRight } from "@tamagui/lucide-icons";
import React, { useRef, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { ScrollView, View, XStack, YStack, Text } from "tamagui";
import CloudImage from "@/utils/cloudinary";
import { BlurView } from "expo-blur";

const { height, width } = Dimensions.get("window");

type Props = {
  post: {
    images: string[];
    created_at: Date;
    title: string;
    subtitle: string;
  };
};

export const PostImages: React.FC<Props> = ({ post }) => {
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
    if (post.images && currentIndex < post.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    }
  };

  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled={true}>
        {post.images.map((image) => {
          return (
            <CloudImage
              key={image}
              public_id={image}
              style={{
                width: width,
                height: height / 3,
                padding: 12,
              }}
            />
          );
        })}
      </ScrollView>

      <View
        style={{
          position: "absolute",
          right: 16,
          top: 20,
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
            {post.title}
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontFamily: "MavenProRegular",
              color: "white",
            }}
          >
            {post.subtitle}
          </Text>
        </YStack>
      </BlurView>
      <XStack
        style={{
          justifyContent: "space-between",
          width: width,
          position: "absolute",
          bottom: 16,
        }}
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
