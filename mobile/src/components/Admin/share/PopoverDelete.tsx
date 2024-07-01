import { api } from "@/utils/api";
import { Trash2 } from "@tamagui/lucide-icons";
import React from "react";
import { Alert } from "react-native";
import {
  Button,
  Label,
  Popover,
  Text,
  XStack,
  YStack,
  type PopoverProps,
} from "tamagui";

type Post = {
  id: string;
  title: string;
};

export function PopoverDelete({
  post,
  ...props
}: PopoverProps & { post: Post }) {
  const removePost = api.post.deletePost.useMutation({
    onSuccess: () => {
      Alert.alert("Alerta", "Post removido com sucesso!");
    },
    onError: () => {
      Alert.alert("Alerta", "Erro ao remover o post.");
    },
  });

  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button icon={Trash2} color={"red"} size={48} />
      </Popover.Trigger>
      <Popover.Content
        borderWidth={1}
        borderColor="#B3B3B3"
        marginHorizontal="$4"
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
          <YStack>
            <Label style={{ fontFamily: "MavenProBold", fontSize: 24 }}>
              Deseja deletar a postagem?
            </Label>
            <Text style={{ fontFamily: "MavenProRegular", fontSize: 16 }}>
              O conteúdo da postagem "
              <Text color={"#C1272D"} style={{ fontFamily: "MavenProRegular" }}>
                {post.title}
              </Text>
              " será excluído e a ação não pode ser desfeita.
            </Text>
          </YStack>
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
                  fontFamily: "MavenProBold",
                }}
              >
                Cancelar
              </Button>
            </Popover.Close>
            <Popover.Close asChild>
              <Button
                style={{
                  backgroundColor: "#ED7A17",
                  color: "white",
                  flex: 1,
                  fontFamily: "MavenProBold",
                  shadowColor: "#1A1A1A",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.3,
                  shadowRadius: 4,
                  elevation: 5,
                }}
                onPress={async () => {
                  removePost.mutate({ id: post.id });
                }}
              >
                Deletar
              </Button>
            </Popover.Close>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
