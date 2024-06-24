import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { Eye, EyeOff, SquarePen, Trash2, Upload } from 'lucide-react-native';
import { useState } from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import type { PopoverProps } from 'tamagui';
import {
  Adapt,
  Button,
  Input,
  Label,
  Popover,
  ScrollView,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';

const { width, height } = Dimensions.get('window');

type Post = {
  images: string[];
  title: string;
  subtitle: string;
  description: string;
  date: Date;
  local: string;
  posted: string;
};

export default function PopoverEdit({
  post,
  ...props
}: PopoverProps & { post: Post }) {
  /* Inputs */
  const [inputTitle, setInputTitle] = useState(post.title);
  const [inputSubtitle, setInputSubtitle] = useState(post.subtitle);
  const [inputLocal, setInputLocal] = useState(post.local);
  const [inputDescription, setInputDescription] = useState(post.description);

  /* ImagePicker */
  const [selectedImage, setSelectedImage] = useState(''); // ToDo: Poder editar as imagens ja existentes, alem de adicionar novas
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

  /* DatePicker */
  const [newdate, setNewdate] = useState(new Date());
  const onChangeDatePicker = (
    event: DateTimePickerEvent | undefined,
    selectedDate: Date | undefined
  ) => {
    if (event?.type === 'neutralButtonPressed') {
      setNewdate(new Date(0));
    } else {
      setNewdate(selectedDate!);
    }
    // 'newdate' armazena a nova data e horario apos mudanca no DatePicker, porem nos meus testes o horario estava saindo 3 horas adiantado (verificar antes de usar)
  };

  const [showImages, setShowImages] = useState<boolean>(false);
  function handleShowImages() {
    if (showImages === true) {
      return 'flex';
    } else {
      return 'none';
    }
  }

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
        <YStack>
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
              value={inputTitle}
              onChangeText={setInputTitle}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              value={inputSubtitle}
              onChangeText={setInputSubtitle}
            ></Input>
            <Input
              style={{ marginVertical: 4 }}
              value={inputLocal}
              onChangeText={setInputLocal}
            ></Input>
            {/* Tentei usar TextArea e Input multiline para a descrição mas estava dando um bug ao preencher o campo no expo, não soube arrumar por isso deixei como Input */}
            <Input
              style={{ marginVertical: 4 }}
              value={inputDescription}
              onChangeText={setInputDescription}
            ></Input>
            <XStack
              style={{
                flex: 1,
                marginVertical: 8,
              }}
            >
              <Button
                icon={showImages ? EyeOff : Eye}
                style={{
                  backgroundColor: '#f8f8f8',
                  color: '#ED7A17',
                  borderWidth: 1,
                  outlineWidth: 0,
                  borderColor: '#ededed',
                  width: 32,
                  marginRight: 8,
                }}
                size={40}
                onPress={() => setShowImages(!showImages)}
              ></Button>
              <Button
                style={{
                  backgroundColor: '#f8f8f8',
                  color: '#ED7A17',
                  borderWidth: 1,
                  outlineWidth: 0,
                  borderColor: '#ededed',
                  padding: 8,
                }}
                size={40}
                icon={Upload}
                onPress={pickImageAsync}
              >
                <Text color={'black'}>Imagens</Text>
              </Button>
              <DateTimePicker
                mode="datetime"
                accentColor="#ED7A17"
                value={post.date}
                onChange={onChangeDatePicker}
                minuteInterval={10}
                timeZoneName={'America/Sao_Paulo'}
              />
            </XStack>
            <YStack style={{ gap: 8 }} display={handleShowImages()}>
              {post.images.map((image) => (
                <ImageBackground
                  source={{ uri: image, width: width - 48 }}
                  style={{ borderRadius: 8, overflow: 'hidden' }}
                >
                  <Button
                    icon={Trash2}
                    size={40}
                    style={{
                      width: 40,
                      margin: 8,
                      marginTop: 48,
                      alignSelf: 'flex-end',
                      color: 'red',
                    }}
                    onPress={() => {
                      /* Código para remover a imagem */
                    }}
                  ></Button>
                </ImageBackground>
              ))}
            </YStack>
            <XStack
              style={{
                flex: 1,
                justifyContent: 'space-between',
                gap: 12,
                marginHorizontal: 6,
                marginTop: 12,
                marginBottom: 48,
                shadowColor: '#1A1A1A',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5,
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
                    setInputTitle(post.title);
                    setInputSubtitle(post.subtitle);
                    setInputLocal(post.local);
                    setInputDescription(post.description);
                    // Código para desfazer edições feitas nas imagens?
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
                  /* Código para salvar a edição da postagem */
                }}
              >
                Salvar
              </Button>
            </XStack>
          </ScrollView>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}