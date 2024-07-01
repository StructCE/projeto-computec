import { Alert } from "react-native";
import { Button, Text } from "tamagui";
import { Upload } from "@tamagui/lucide-icons";
import * as ImagePicker from "expo-image-picker";
import { uploadImages } from "@/utils/cloudinary";

type ImagePickerProps = {
  selectedImages: string[];
  setSelectedImages: React.Dispatch<React.SetStateAction<string[]>>;
};

export function ImagePickerComponent({
  selectedImages,
  setSelectedImages,
}: ImagePickerProps) {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const uploadedImagesId = await uploadImages({
        files: result.assets.map((file) => ({
          uri: file.uri,
          name: file.fileName || "photo",
        })),
      });
      setSelectedImages([...selectedImages, ...uploadedImagesId]);
    } else {
      Alert.alert("Você não selecionou nenhuma imagem.");
    }
  };

  return (
    <Button
      backgroundColor="#f8f8f8"
      color="#ED7A17"
      borderWidth={1}
      borderColor="#ededed"
      padding={8}
      size={40}
      icon={Upload}
      onPress={pickImageAsync}
    >
      <Text color="black" style={{ fontFamily: "MavenProRegular" }}>
        Imagens
      </Text>
    </Button>
  );
}
