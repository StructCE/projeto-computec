import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Plus, Upload } from 'lucide-react-native';
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
  date: Date;
  time: string;
  local: string;
  posted: string;
};

export default function PopoverEdit({
  post,
  ...props
}: PopoverProps & { post: Post }) {
  /* Inputs */
  const [inputTitle, setInputTitle] = useState('');
  const [inputSubtitle, setInputSubtitle] = useState('');
  const [inputLocal, setInputLocal] = useState('');
  const [inputDescription, setInputDescription] = useState('');

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
        <Button
          icon={Plus}
          size={48}
          style={{
            color: 'white',
            backgroundColor: '#ED7A17',
            borderRadius: 32,
          }}
        />
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
              Criar postagem
            </Label>
            <Text style={{ fontSize: 16, marginVertical: 4 }}>
              Preencha todos os campos{' '}
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
                  accentColor="#ED7A17"
                />
                <XStack>
                  <DateTimePicker
                    mode="time"
                    value={new Date()}
                    accentColor="#ED7A17"
                    minuteInterval={5}
                  />
                  <DateTimePicker
                    mode="time"
                    value={new Date()}
                    accentColor="#ED7A17"
                    minuteInterval={5}
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
                onPress={() => {
                  setInputTitle('');
                  setInputSubtitle('');
                  setInputLocal('');
                  setInputDescription('');
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
                borderRadius: 5,
                shadowColor: '#1A1A1A',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
                elevation: 5,
              }}
              onPress={() => {
                /* Código para criar a postagem */
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
