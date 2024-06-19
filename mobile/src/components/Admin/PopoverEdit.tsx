import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { ArrowRight, SquarePen, Upload } from 'lucide-react-native';
import { useState } from 'react';
import type { PopoverProps } from 'tamagui';
import {
  Adapt,
  Button,
  Input,
  Label,
  Popover,
  ScrollView,
  Text,
  TextArea,
  View,
  XStack,
  YStack,
} from 'tamagui';

type Post = {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  date: string;
  time: string;
  local: string;
  posted: string;
};

export default function PopoverEdit({
  post,
  ...props
}: PopoverProps & { post: Post }) {
  /* ImagePicker */
  const [selectedImage, setSelectedImage] = useState('');
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      for (let i = 0; i < result.assets.length; i++) {
        console.log(result.assets[i].uri); // Uri's das imagens selecionadas
      }
    } else {
      alert('Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <Popover size="$5" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button icon={SquarePen} color={'#FBB03B'} size={48} />
      </Popover.Trigger>
      <Adapt when="sm" platform="touch">
        <Popover.Sheet
          snapPointsMode={'mixed'}
          snapPoints={['fit', '75%']}
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
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <YStack gap="$3">
          <ScrollView>
            <Label style={{ fontWeight: 'bold', fontSize: 24 }}>
              Editar postagem
            </Label>
            <Text style={{ fontSize: 16, marginVertical: 4 }}>
              Altere os campos para atualizar informações da notícia "
              <Text color={'#C1272D'} fontWeight={600}>
                {post.title}
              </Text>
              ".
            </Text>
            <Input
              style={{ marginVertical: 4 }}
              placeholder={post.title}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              placeholder={post.subtitle}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              placeholder={post.local}
            ></Input>
            <TextArea
              style={{ marginVertical: 4 }}
              placeholder={post.description}
            ></TextArea>
            <XStack
              style={{
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                marginVertical: 4,
              }}
            >
              <Button
                style={{
                  backgroundColor: '#f8f8f8',
                  color: '#ED7A17',
                  borderWidth: 1,
                  outlineWidth: 0,
                  borderColor: '#ededed',
                }}
                size={64}
                icon={Upload}
                onPress={pickImageAsync}
              >
                <Text color={'black'} fontSize={17}>
                  Imagens
                </Text>
              </Button>
              <YStack
                style={{
                  gap: 8,
                  alignItems: 'center',
                }}
              >
                <DateTimePicker
                  mode="date"
                  value={new Date()}
                  minimumDate={new Date(2024, 1, 1)}
                  maximumDate={new Date(2025, 12, 31)}
                  accentColor="#ED7A17"
                />
                <XStack>
                  <DateTimePicker
                    mode="time"
                    value={new Date()}
                    accentColor="#ED7A17"
                  />
                  <DateTimePicker
                    mode="time"
                    value={new Date()}
                    accentColor="#ED7A17"
                  />
                </XStack>
              </YStack>
            </XStack>
          </ScrollView>
          <XStack
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
              gap: 24,
              marginBottom: 48,
            }}
          >
            <Popover.Close asChild>
              <Button style={{ fontSize: 14, flex: 1 }}>Cancelar</Button>
            </Popover.Close>
            <Button
              style={{
                backgroundColor: '#ED7A17',
                color: 'white',
                flex: 1,
                fontWeight: 'bold',
              }}
              onPress={() => {
                /* Código para deletar postagem */
              }}
            >
              Salvar
            </Button>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}
