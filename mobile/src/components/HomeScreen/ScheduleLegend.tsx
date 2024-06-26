import { Circle } from "@tamagui/lucide-icons";
import { Text } from "react-native";
import { XStack, YStack } from "tamagui";

export function ScheduleLegend() {
  return (
    <>
      <YStack>
        <Text
          style={{
            fontWeight: "500",
            marginBottom: 6,
            fontSize: 15,
            fontFamily: "MavenProMedium",
          }}
        >
          Legenda:
        </Text>
        <XStack style={{ flex: 1, gap: 20 }}>
          <XStack
            style={{
              alignItems: "center",
              gap: 4,
            }}
          >
            <Circle size={16} fill={"#52AED5"} color={"#52AED5"}></Circle>
            <Text style={{ fontSize: 14, fontFamily: "MavenProRegular" }}>
              Cerrado (Térreo)
            </Text>
          </XStack>
          <XStack
            style={{
              alignItems: "center",
              gap: 4,
            }}
          >
            <Circle size={16} fill={"#556AD2"} color={"#556AD2"}></Circle>
            <Text style={{ fontSize: 14, fontFamily: "MavenProRegular" }}>
              Praça dos Ipês (Piso Superior)
            </Text>
          </XStack>
        </XStack>
      </YStack>
    </>
  );
}
