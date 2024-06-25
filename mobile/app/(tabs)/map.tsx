import Pin, { LocalPositions } from "@/src/components/Pin";
import { View, Text, Image, ScrollView } from "tamagui";
import { Dimensions } from "react-native";
import { useEffect, useRef } from "react";
import React from "react";

export default function Map() {
  const LocalPositionsFixed: LocalPositions[] = [
    // POSIÇÕES TÉRREO CERRADO
    {
      localName: "Caliandra",
      originalLocation: "(Vera Cruz 2)",
      PosLeft: 60,
      PosTop: 105,
    },
    {
      localName: "CHUVEIRINHO",
      originalLocation: "(Vera Cruz 1)",
      PosLeft: 65,
      PosTop: 235,
    },
    {
      localName: "CAJUZINHO",
      originalLocation: "(Mundo novo 2)",
      PosLeft: 320,
      PosTop: 103,
    },
    {
      localName: "FLAMBOYANT",
      originalLocation: "(Mundo novo 1)",
      PosLeft: 320,
      PosTop: 195,
    },
    {
      localName: "FLOR DE PEQUI",
      originalLocation: "(Multiuso)",
      PosLeft: 320,
      PosTop: 275,
    },
    {
      localName: "PARA-TUDO",
      originalLocation: "(Reunião B)",
      PosLeft: 290,
      PosTop: 285,
    },
    {
      localName: "CANELA DE EMA",
      originalLocation: "(Reunião A)",
      PosLeft: 290,
      PosTop: 250,
    },
    //POSIÇÃO PAVILHÃO - CERRADO
    {
      localName: "PAVILHÃO TÉRREO - CERRADO",
      originalLocation: "(PISO TÉRREO)",
      PosLeft: 625,
      PosTop: 210,
    },
    //POSIÇÕES 1ª ANDAR - PRAÇA DOS IPÊS
    {
      localName: "IPÊ ROSA",
      originalLocation: "(Porto Seguro 3)",
      PosLeft: 940,
      PosTop: 10,
    },
    {
      localName: "IPÊ BRANCO",
      originalLocation: "(Porto Seguro 2)",
      PosLeft: 950,
      PosTop: 60,
    },
    {
      localName: "IPÊ ROXO",
      originalLocation: "(Porto Seguro 1)",
      PosLeft: 955,
      PosTop: 110,
    },
    {
      localName: "IPÊ AMARELO",
      originalLocation: "(BRASIL 2)",
      PosLeft: 1068,
      PosTop: 250,
    },
    {
      localName: "IPÊ AMARELO",
      originalLocation: "(BRASIL 3)",
      PosLeft: 1140,
      PosTop: 250,
    },
  ];

  const scrollViewRef = useRef<ScrollView>(null);
  const screenWidth = Dimensions.get("window").width;
  const imageWidth = 1271;

  useEffect(() => {
    if (scrollViewRef.current) {
      const xOffset = (imageWidth - screenWidth) / 2;
      scrollViewRef.current.scrollTo({ x: xOffset, y: 0, animated: false });
    }
  }, [screenWidth]);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#F2F2F2" }}
    >
      <View style={{ alignItems: "center", backgroundColor: "#F2F2F2" }}>
        <Text fontWeight="700" fontSize="$5" color={"#A92227"}>
          Mapa do Evento
        </Text>

        <Text color={"#1A1A1A"}>Encontre o evento que você procura aqui!</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: imageWidth }}
      >
        <Image
          style={{ position: "relative", width: imageWidth }}
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
