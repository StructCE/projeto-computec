import { View, Text, XStack, YStack } from "tamagui";
import { Link } from "expo-router"
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Anais() {
  return (
    <MaskedView
      maskElement={
        <Text
          fontSize={20}
          style={{
            fontFamily: "MavenProBold",
          }}
        >
          ANAIS DE CONFERÊNCIA
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
  )
}