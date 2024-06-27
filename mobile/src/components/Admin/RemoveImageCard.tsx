import { api } from '@/utils/api';
import CloudImage from '@/utils/cloudinary';
import { Trash2 } from 'lucide-react-native';
import { Dimensions } from 'react-native';
import { AlertDialog, Button, View, XStack, YStack } from 'tamagui';

const { width, height } = Dimensions.get('window');

type Post = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  created_at: Date;
  images: string[];
  dateTime: Date | null;
  local: string | null;
};

export default function RemoveImageCard({
  post,
  index,
}: {
  post: Post;
  index: number;
}) {
  const postLocal = post.local ? post.local : '';
  const postDateTime = post.dateTime ? post.dateTime : new Date();

  const updatePost = api.post.updatePost.useMutation({
    onSuccess: () => {
      console.log('Imagem removida com sucesso');
    },
    onError: () => {
      console.log('Erro ao remover a imagem.');
    },
  });

  return (
    <View style={{ flex: 1, alignSelf: 'center', position: 'relative' }}>
      <CloudImage
        key={post.images[index]}
        public_id={post.images[index]}
        style={{
          borderRadius: 8,
          overflow: 'hidden',
          width: width - 48,
          height: 100,
        }}
      />
      <AlertDialog native>
        <AlertDialog.Trigger asChild>
          <Button
            icon={Trash2}
            size={40}
            style={{
              width: 40,
              color: 'red',
              bottom: 8,
              right: 8,
              position: 'absolute',
            }}
          ></Button>
        </AlertDialog.Trigger>

        <AlertDialog.Portal>
          <AlertDialog.Overlay
            key="overlay"
            animation="quick"
            opacity={0.5}
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
          <AlertDialog.Content
            bordered
            elevate
            key="content"
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
            exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
            x={0}
            scale={1}
            opacity={1}
            y={0}
          >
            <YStack>
              <AlertDialog.Title>Remover Imagem</AlertDialog.Title>
              <AlertDialog.Description>
                Tem certeza que deseja removar a imagem? Essa ação não pode ser
                desfeita.
              </AlertDialog.Description>

              <XStack gap="$3" justifyContent="flex-end">
                <AlertDialog.Cancel asChild>
                  <Button>Cancelar</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button
                    onPress={() => {
                      updatePost.mutate({
                        id: post.id,
                        data: {
                          title: post.title,
                          subtitle: post.subtitle,
                          local: postLocal, // = post.local ? post.local : '';
                          description: post.description,
                          dateTime: postDateTime, // = post.dateTime ? post.dateTime : new Date();
                          images: post.images[index],
                        },
                      });
                    }}
                  >
                    Remover
                  </Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </View>
  );
}
