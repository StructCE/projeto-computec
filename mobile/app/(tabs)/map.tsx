import Pin from "@/src/components/Pin";
import { LocalPositionsFixed } from "@/constants/LocalPositionsFixed";
import { View, Text, Image, ScrollView } from "tamagui";
import { Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import React from "react";

export default function Map() {
  const scrollViewRef = useRef<any>(null);
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = 1271;

  useEffect(() => {
    if (scrollViewRef.current) {
      const xOffset = (imageWidth - screenWidth) / 2;
      scrollViewRef.current.scrollTo({ x: xOffset, y: 0, animated: false });
    }
  }, [screenWidth]);

  return (
    <View justifyContent="center" flex={1} backgroundColor="#F2F2F2">
      <View alignItems="center" backgroundColor="#F2F2F2">
        <Text
          fontSize="$5"
          color="#A92227"
          style={{ fontFamily: "MavenProBold" }}
        >
          Mapa do Evento
        </Text>

        <Text color={"#1A1A1A"} style={{ fontFamily: "MavenProMedium" }}>
          Encontre o evento que você procura aqui!
        </Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: imageWidth }}
      >
        <Image
          position="relative"
          width={imageWidth}
          source={require("../../../mobile/assets/images/Mapa.png")}
        />
        {LocalPositionsFixed.map((local, index) => (
          <Pin
            key={index}
            localName={local.localName}
            originalLocation={local.originalLocation}
            PosLeft={local.PosLeft}
            PosTop={local.PosTop}
          />
        ))}
      </ScrollView>
    </View>
  );
}
