import { Post } from "@/constants/interfaces/post";
import CloudImage, { cld } from "@/utils/cloudinary";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { Text, View, YStack, ScrollView } from "tamagui";

const { width, height } = Dimensions.get("window");

export default function PostCard({
  id,
  title,
  subtitle,
  created_at,
  images,
}: Pick<Post, "id" | "title" | "subtitle" | "created_at" | "images">) {
  const margin = 16;
  const imageWidth = width - 2 * margin;
  const imageHeight = height / 4;
  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    const numOfBackground = images.length;
    let scrollValue = 0,
      scrolled = 0;
    const intervalId = setInterval(() => {
      scrolled++;
      if (scrolled < numOfBackground) scrollValue = scrollValue + imageWidth;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      scrollViewRef.current?.scrollTo({ x: scrollValue, animated: true });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View flex={1} alignSelf="center" position="relative">
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        width={imageWidth}
        height={imageHeight}
        borderRadius={20}
        bg="white"
      >
        {images.map((image) => {
          return (
            <CloudImage
              key={image}
              cloudImage={cld
                .image(image)
                .resize(fill().width(imageWidth).height(imageHeight))
                .roundCorners(byRadius(20))}
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
        <Text fontSize={12} style={{ fontFamily: "MavenProMedium" }}>
          Postado
        </Text>
        <Text
          color="black"
          fontSize={13}
          style={{
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
          top: 10,
          width: width - width / 3,
          maxHeight: 140,
          overflow: "hidden",
          borderStartEndRadius: 20,
          borderEndEndRadius: 20,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderColor: "rgba(0, 0, 0, 0.01)",
          paddingLeft: 24,
          paddingRight: 12,
          paddingVertical: 20,
          marginVertical: 12,
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
      <Link
        href={{
          pathname: "/(tabs)/post",
          params: {
            id: id,
          },
        }}
        style={{
          position: "absolute",
          color: "white",
          backgroundColor: "#C1272D",
          fontFamily: "MavenProBold",
          bottom: 10,
          width: 132,
          alignSelf: "center",
          marginLeft: margin,
          textAlign: "center",
          paddingVertical: 10,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        Leia Mais
      </Link>
    </View>
  );
}
