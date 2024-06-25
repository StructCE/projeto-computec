import Pin, { LocalPositions } from "@/src/components/Pin";
import { View, Text, Image, ScrollView } from "tamagui";

export default function Map() {
  const LocalPositionSunday: LocalPositions[] = [
    {
      localName: "FLAMBOYANT",
      originalLocation: "(Mundo novo 1)",
      PosLeft: 320,
      PosTop: 210,
    },
    {
      localName: "Caliandra",
      originalLocation: "(Vera Cruz 2)",
      PosLeft: 60,
      PosTop: 190,
    },
    {
      localName: "kkkkkkk",
      originalLocation: "awdawdawd",
      PosLeft: 620,
      PosTop: 220,
    },
  ];

  return (
    <View flex={1} jc={"center"} bg={"#FFFFFF"}>
      <View ai={"center"} bg={"#F2F2F2"}>
        <Text>Mapa do Evento</Text>
        <Text>Encontre o evento que você procura aqui!</Text>
      </View>
      <ScrollView contentOffset={{ x: 441, y: 0 }} horizontal>
        <Image
          style={{ position: "relative" }}
          source={require("../../../mobile/assets/images/Mapa.png")}
        />
        {LocalPositionSunday.map((local, index) => (
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
