import { TouchableOpacity } from "react-native";
import { View, Text, Image, ScrollView, YStack, XStack, Button } from "tamagui";
import Popover from "react-native-popover-view";
import React, { useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Tab() {
  const [showPopover, setShowPopover] = useState(false);
  const [showPopover1, setShowPopover1] = useState(false);

  const touchable = useRef();
  const touchable1 = useRef();

  return (
    <View flex={1} jc={"center"} bg={"#FFFFFF"}>
      <View ai={"center"} bg={"#F2F2F2"}>
        <Text>Mapa do Evento</Text>
        <Text>Encontre o evento que você procura aqui!</Text>
      </View>
      <ScrollView horizontal={true}>
        <Image
          style={{ position: "relative" }}
          //Implementar redirecionamento para home usando Link ou TouchableOpacity sem quebrar o padding
          source={require("../../../mobile/assets/images/Planta_2_Cortado.png")}
        />
        <TouchableOpacity
          ref={touchable}
          onPress={() => setShowPopover(true)}
          style={{ position: "absolute", left: 80, top: 100 }}
        >
          <Image
            source={require("../../../mobile/assets/images/pin.png")}
            width={20}
            height={25}
          />
        </TouchableOpacity>

        <TouchableOpacity
          ref={touchable1}
          onPress={() => setShowPopover1(true)}
          style={{ position: "absolute", left: 300, top: 100 }}
        >
          <Image
            source={require("../../../mobile/assets/images/pin.png")}
            width={20}
            height={25}
          />
        </TouchableOpacity>
      </ScrollView>
      <Popover
        popoverStyle={{ borderRadius: 10, backgroundColor: "#F2F2F2" }}
        from={touchable}
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
      >
        <YStack>
          <View ai={"center"} padding={"$2.5"}>
            <Text fontSize={12}>Hackeando o FBI</Text>
            <XStack>
              <Text fontSize={10} marginRight="$1.5">
                Guilherme Sampaio
              </Text>
              <Text fontSize={10}>Sala 1</Text>
            </XStack>
            <View>
              <LinearGradient
                colors={["#a92227", "#ed7a17"]}
                start={{ x: 0, y: 1 }}
                locations={[0.4, 1]}
                style={{ borderRadius: 4 }}
              >
                <TouchableOpacity
                  style={{ paddingHorizontal: 14, paddingVertical: 1 }}
                  activeOpacity={0.5}
                >
                  <Text fontSize={10} color={"#F2F2F2"}>
                    Saiba mais
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </YStack>
      </Popover>

      <Popover
        popoverStyle={{ borderRadius: 10, backgroundColor: "#F2F2F2" }}
        from={touchable1}
        isVisible={showPopover1}
        onRequestClose={() => setShowPopover1(false)}
      >
        <YStack>
          <View ai={"center"} padding={"$2.5"}>
            <Text fontSize={12}>WorkShoppppp</Text>
            <XStack>
              <Text fontSize={10} marginRight="$1.5">
                Guilherme Sampaio
              </Text>
              <Text fontSize={10}>Sala 1</Text>
            </XStack>
            <View>
              <LinearGradient
                colors={["#a92227", "#ed7a17"]}
                start={{ x: 0, y: 1 }}
                locations={[0.4, 1]}
                style={{ borderRadius: 4 }}
              >
                <TouchableOpacity
                  style={{ paddingHorizontal: 14, paddingVertical: 1 }}
                  activeOpacity={0.5}
                >
                  <Text fontSize={10} color={"#F2F2F2"}>
                    Saiba mais
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </YStack>
      </Popover>
    </View>
  );
}
