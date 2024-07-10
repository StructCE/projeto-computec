import CloudImage from "@/utils/cloudinary";
import { Trash2 } from "@tamagui/lucide-icons";
import { Dimensions } from "react-native";
import { Button, View } from "tamagui";

const { width } = Dimensions.get("window");

export function RemoveImageCard({
  image,
  state,
  setState,
}: {
  image: string;
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <View style={{ flex: 1, alignSelf: "center", position: "relative" }}>
      <CloudImage
        public_id={image}
        style={{
          borderRadius: 8,
          overflow: "hidden",
          width: width - 48,
          height: 100,
        }}
      />
      <Button
        onPress={() => {
          setState(state.filter((imageState) => imageState !== image));
        }}
        icon={Trash2}
        size={40}
        style={{
          width: 40,
          color: "red",
          bottom: 8,
          right: 8,
          position: "absolute",
        }}
      ></Button>
    </View>
  );
}
