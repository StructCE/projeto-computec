import Pin from "@/src/components/Pin";
import { LocalPositionsFixed } from "@/constants/LocalPositionsFixed";
import { View, Text, Image, ScrollView } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import MaskedView from "@react-native-masked-view/masked-view";
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
      <View backgroundColor="#F2F2F2">
        <MaskedView
          maskElement={
            <Text
              fontSize="$5"
              textAlign="center"
              style={{
                fontFamily: "MavenProBold",
              }}
            >
              Mapa do Evento
            </Text>
          }
        >
          <LinearGradient
            colors={["#a92227", "#ed7a17"]}
            start={{ x: 0.5, y: 2 }}
            end={{ x: 0.5, y: -0.5 }}
            locations={[0.4, 1]}
            style={{
              height: 30,
            }}
          />
        </MaskedView>
        <Text
          color={"#1A1A1A"}
          textAlign="center"
          style={{ fontFamily: "MavenProMedium" }}
        >
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
