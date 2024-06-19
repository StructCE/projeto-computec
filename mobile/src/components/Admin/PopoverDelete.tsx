import { Trash2 } from 'lucide-react-native';
import React from 'react';
import type { PopoverProps } from 'tamagui';
import { Adapt, Button, Label, Popover, Text, XStack, YStack } from 'tamagui';

type Post = {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  date: Date;
  time: string;
  local: string;
  posted: string;
};

export default function PopoverDelete({
  post,
  ...props
}: PopoverProps & { post: Post }) {
  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button icon={Trash2} color={'red'} size={48} />
      </Popover.Trigger>
      <Adapt when="sm" platform="touch">
        <Popover.Sheet snapPointsMode={'fit'} modal dismissOnSnapToBottom>
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
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <YStack gap="$3">
          <YStack>
            <Label style={{ fontWeight: 'bold', fontSize: 24 }}>
              Deseja deletar a postagem?
            </Label>
            <Text style={{ fontSize: 16 }}>
              O conteúdo da postagem "
              <Text color={'#C1272D'} fontWeight={600}>
                {post.title}
              </Text>
              " será excluído e a ação não pode ser desfeita.
            </Text>
          </YStack>
          <XStack
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              gap: 24,
              marginBottom: 96,
            }}
          >
            <Popover.Close asChild>
              <Button
                style={{
                  fontSize: 14,
                  flex: 1,
                  shadowColor: '#1A1A1A',
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              >
                Cancelar
              </Button>
            </Popover.Close>
            <Button
              style={{
                backgroundColor: '#ED7A17',
                color: 'white',
                flex: 1,
                fontWeight: 'bold',
                shadowColor: '#1A1A1A',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
              }}
              onPress={() => {
                /* Código para deletar postagem */
              }}
            >
              Deletar
            </Button>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
