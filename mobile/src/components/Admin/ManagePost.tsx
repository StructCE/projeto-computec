import { useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Input,
  Label,
  ScrollView,
  Sheet,
  Text,
  XStack,
  YStack,
  type PopoverProps,
} from "tamagui";
import { Eye, EyeOff, Plus, SquarePen } from "@tamagui/lucide-icons";
import { api } from "@/utils/api";
import {
  ImagePickerComponent,
  DateTimePickerComponent,
  RemoveImageCard,
} from "./share";
import { Post } from "@/constants/interfaces/post";

export function ManagePost({ post, ...props }: PopoverProps & { post?: Post }) {
  const isEditMode = !!post;
  const [showImages, setShowImages] = useState(false);
  const [open, setOpen] = useState(false);
  const [inputTitle, setInputTitle] = useState(post?.title || "");
  const [inputSubtitle, setInputSubtitle] = useState(post?.subtitle || "");
  const [inputLocal, setInputLocal] = useState(post?.local || "");
  const [inputDescription, setInputDescription] = useState(
    post?.description || ""
  );
  const [selectedImages, setSelectedImages] = useState(post?.images || []);
  const [newDate, setNewDate] = useState(
    new Date(post?.dateTime || Date.now())
  );
  const [newTime, setNewTime] = useState(
    new Date(post?.dateTime || Date.now())
  );

  const resetStates = () => {
    setInputTitle(post?.title || "");
    setInputSubtitle(post?.subtitle || "");
    setInputLocal(post?.local || "");
    setInputDescription(post?.description || "");
    setSelectedImages(post?.images || []);
  };

  const createPost = api.post.createPost.useMutation({
    onSuccess: () => Alert.alert("Alerta", "Post criado com sucesso!"),
    onError: () => Alert.alert("Alerta", "Erro ao criar o post."),
  });

  const updatePost = api.post.updatePost.useMutation({
    onSuccess: () => Alert.alert("Alerta", "Post atualizado com sucesso!"),
    onError: () => Alert.alert("Alerta", "Erro ao atualizar o post."),
  });

  const handleSubmit = async () => {
    const combinedDateTime = new Date(
      newDate.getUTCFullYear(),
      newDate.getUTCMonth(),
      newDate.getUTCDate(),
      newTime.getUTCHours(),
      newTime.getUTCMinutes(),
      newTime.getUTCSeconds()
    );

    const postData = {
      title: inputTitle,
      subtitle: inputSubtitle,
      local: inputLocal,
      description: inputDescription,
      dateTime: combinedDateTime,
      images: selectedImages,
    };

    if (isEditMode && post?.id) {
      updatePost.mutate({ id: post.id, data: postData });
    } else {
      createPost.mutate({ data: postData });
    }
    setOpen(false);
    resetStates();
  };

  return (
    <>
      <YStack>
        {isEditMode ? (
          <Button
            onPress={() => setOpen(true)}
            icon={SquarePen}
            color="#FBB03B"
            size={48}
          />
        ) : (
          <Button
            onPress={() => setOpen(true)}
            icon={Plus}
            size={56}
            style={{
              color: "white",
              backgroundColor: "#ED7A17",
              borderRadius: 32,
              width: 56,
            }}
          />
        )}
      </YStack>

      <Sheet
        modal
        open={open}
        snapPoints={[75]}
        dismissOnSnapToBottom
        animation="lazy"
        {...props}
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <ScrollView>
            <Label fontSize={24} style={{ fontFamily: "MavenProBold" }}>
              {isEditMode ? "Editar postagem" : "Criar postagem"}
            </Label>
            <Text
              fontSize={16}
              marginVertical={4}
              style={{ fontFamily: "MavenProRegular" }}
            >
              {isEditMode ? (
                `Altere os campos para atualizar informações da notícia "${post?.title}".`
              ) : (
                <Text style={{ fontSize: 16, marginVertical: 4 }}>
                  Preencha todos os campos{" "}
                  <Text color="#C1272D">obrigatórios*</Text> para criar uma
                  notícia.
                </Text>
              )}
            </Text>

            <Input
              marginVertical={4}
              style={{ fontFamily: "MavenProRegular" }}
              placeholder="Título*"
              value={inputTitle}
              onChangeText={setInputTitle}
            />
            <Input
              marginVertical={4}
              style={{ fontFamily: "MavenProRegular" }}
              placeholder="Subtítulo*"
              value={inputSubtitle}
              onChangeText={setInputSubtitle}
            />
            <Input
              marginVertical={4}
              style={{ fontFamily: "MavenProRegular" }}
              placeholder="Local"
              value={inputLocal}
              onChangeText={setInputLocal}
            />
            <Input
              marginVertical={4}
              style={{ fontFamily: "MavenProRegular" }}
              placeholder="Descrição*"
              value={inputDescription}
              onChangeText={setInputDescription}
            />
            <XStack gap={10} flex={1} marginVertical={8}>
              <Button
                icon={showImages ? EyeOff : Eye}
                backgroundColor="#f8f8f8"
                color="#ED7A17"
                borderWidth={1}
                borderColor="#ededed"
                width={32}
                size={40}
                onPress={() => setShowImages(!showImages)}
              />
              <ImagePickerComponent
                selectedImages={selectedImages}
                setSelectedImages={setSelectedImages}
              />
              <DateTimePickerComponent
                newDate={newDate}
                setNewDate={setNewDate}
                newTime={newTime}
                setNewTime={setNewTime}
              />
            </XStack>
            <YStack style={{ gap: 8 }} display={showImages ? "flex" : "none"}>
              {selectedImages.map((image, index) => (
                <RemoveImageCard
                  key={index}
                  image={image}
                  state={selectedImages}
                  setState={setSelectedImages}
                />
              ))}
            </YStack>

            <XStack
              flex={1}
              justifyContent="space-between"
              gap={12}
              marginHorizontal={6}
              marginTop={12}
              marginBottom={48}
            >
              <Button fontSize={14} flex={1} onPress={resetStates}>
                Cancelar
              </Button>
              <Button
                backgroundColor="#ED7A17"
                color="white"
                flex={1}
                fontWeight="bold"
                onPress={handleSubmit}
              >
                {isEditMode ? "Salvar" : "Criar"}
              </Button>
            </XStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
