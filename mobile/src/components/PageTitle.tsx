import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Text } from "tamagui";

export default function PageTitle({ title }: { title: string }) {
  return (
    <>
      <MaskedView
        maskElement={
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {title}
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
    </>
  );
}
