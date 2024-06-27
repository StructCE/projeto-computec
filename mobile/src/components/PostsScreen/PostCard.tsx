import CloudImage from "@/utils/cloudinary";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import React, { useEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { Text, View, YStack, ScrollView } from "tamagui";

type Post = {
  id: string;
  title: string;
  subtitle: string;
  created_at: Date;
  images: string[];
};

const { width, height } = Dimensions.get("window");

export default function PostCard({ post }: { post: Post }) {
  const margin = 16;
  const imageWidth = width - 2 * margin;

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    const numOfBackground = post.images.length;
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
    <View style={{ flex: 1, alignSelf: "center", position: "relative" }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        style={{
          width: imageWidth,
          height: height / 3,
          borderRadius: 20,
          backgroundColor: "white",
        }}
      >
        {post.images.map((image) => {
          return (
            <CloudImage
              key={image}
              public_id={image}
              style={{
                width: imageWidth,
                height: height / 3,
                borderRadius: 20,
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
          {String(post.created_at.getDate()).padStart(2, "0")}/
          {String(post.created_at.getMonth() + 1).padStart(2, "0")}
        </Text>
      </View>
      <BlurView
        intensity={15}
        style={{
          position: "absolute",
          top: 20,
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
      <Link
        href={{
          pathname: "/(tabs)/post",
          params: {
            id: post.id,
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
