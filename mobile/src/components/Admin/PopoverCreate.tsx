import { api } from "@/utils/api";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import { Plus, Upload } from "@tamagui/lucide-icons";
import { useState } from "react";
import { Alert } from "react-native";
import type { PopoverProps } from "tamagui";
import {
  Adapt,
  Button,
  Input,
  Label,
  Popover,
  ScrollView,
  Text,
  XStack,
  YStack,
} from "tamagui";

export function PopoverCreate({ ...props }: PopoverProps) {
  /* Inputs */
  const [inputTitle, setInputTitle] = useState("");
  const [inputSubtitle, setInputSubtitle] = useState("");
  const [inputLocal, setInputLocal] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  /* ImagePicker */
  const [selectedImage, setSelectedImage] = useState([""]);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      for (let i = 0; i < result.assets.length; i++) {
        setSelectedImage([...selectedImage, result.assets[i].uri]);
      }
    } else {
      alert("Você não selecionou nenhuma imagem.");
    }
  };

  /* DatePicker */
  const [newdate, setNewdate] = useState(new Date());
  const onChangeDatePicker = (
    event: DateTimePickerEvent | undefined,
    selectedDate: Date | undefined
  ) => {
    if (event?.type === "neutralButtonPressed") {
      setNewdate(new Date(0));
    } else {
      setNewdate(selectedDate!);
    }
    // 'newdate' armazena a nova data e horario apos mudanca no DatePicker, porem nos meus testes o horario estava saindo 3 horas adiantado (verificar antes de usar)
  };

  const createPost = api.post.createPosts.useMutation({
    onSuccess: () => {
      Alert.alert("Alerta", "Post criado com sucesso!");
    },
    onError: () => {
      Alert.alert("Alerta", "Erro ao criar o post.");
    },
  });

  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button
          icon={Plus}
          size={56}
          style={{
            color: "white",
            backgroundColor: "#ED7A17",
            borderRadius: 32,
            width: 56,
          }}
        />
      </Popover.Trigger>
      <Adapt when="sm" platform="touch">
        <Popover.Sheet
          snapPointsMode={"percent"}
          snapPoints={[80]}
          modal
          dismissOnSnapToBottom
        >
          <Popover.Sheet.Frame padding="$4">
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Popover.Sheet>
      </Adapt>
      <Popover.Content
        borderWidth={1}
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <YStack gap="$3">
          <ScrollView>
            <Label style={{ fontWeight: "bold", fontSize: 24 }}>
              Criar postagem
            </Label>
            <Text style={{ fontSize: 16, marginVertical: 4 }}>
              Preencha todos os campos{" "}
              <Text color="#C1272D">obrigatórios*</Text> para criar uma notícia.
            </Text>
            <Input
              style={{ marginVertical: 4 }}
              placeholder="Título*"
              value={inputTitle}
              onChangeText={setInputTitle}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              placeholder="Subtítulo*"
              value={inputSubtitle}
              onChangeText={setInputSubtitle}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              placeholder="Local"
              value={inputLocal}
              onChangeText={setInputLocal}
            ></Input>
            {/* Tentei usar TextArea para a descrição mas estava dando um bug ao preencher o campo no expo */}
            <Input
              style={{ marginVertical: 4 }}
              placeholder="Descrição*"
              value={inputDescription}
              onChangeText={setInputDescription}
            ></Input>
            <XStack
              style={{
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <Button
                style={{
                  backgroundColor: "#f8f8f8",
                  color: "#ED7A17",
                  borderWidth: 1,
                  outlineWidth: 0,
                  borderColor: "#ededed",
                }}
                size={40}
                icon={Upload}
                onPress={pickImageAsync}
              >
                <Text color={"black"}>Imagens</Text>
              </Button>
              <DateTimePicker
                mode="datetime"
                accentColor="#ED7A17"
                value={newdate}
                onChange={onChangeDatePicker}
                minuteInterval={10}
                timeZoneName={"America/Sao_Paulo"}
              />
            </XStack>
          </ScrollView>
          <XStack
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              gap: 24,
              marginBottom: 48,
            }}
          >
            <Popover.Close asChild>
              <Button
                style={{
                  fontSize: 14,
                  flex: 1,
                  shadowColor: "#1A1A1A",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                }}
                onPress={() => {
                  setInputTitle("");
                  setInputSubtitle("");
                  setInputLocal("");
                  setInputDescription("");
                }}
              >
                Cancelar
              </Button>
            </Popover.Close>
            <Button
              style={{
                backgroundColor: "#ED7A17",
                color: "white",
                flex: 1,
                fontWeight: "bold",
                borderRadius: 5,
                shadowColor: "#1A1A1A",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
              }}
              onPress={() => {
                createPost.mutate({
                  data: {
                    title: inputTitle,
                    subtitle: inputSubtitle,
                    local: inputLocal,
                    description: inputDescription,
                    dateTime: newdate,
                    images: selectedImage,
                  },
                });
              }}
            >
              Criar
            </Button>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
