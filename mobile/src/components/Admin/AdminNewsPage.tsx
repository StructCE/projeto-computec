import MaskedView from '@react-native-masked-view/masked-view';
import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ScrollView } from 'react-native';
import { Text, View, XStack, YStack } from 'tamagui';
import PageTitle from '../PageTitle';
import PopoverCreate from './PopoverCreate';
import PopoverDelete from './PopoverDelete';
import PopoverEdit from './PopoverEdit';

const posts = [
  {
    images: [
      'https://ravel.com.br/blog/wp-content/uploads/2022/08/Hackers-do-dia-a-dia-Capa.jpg',
      'https://conteudo.imguol.com.br/c/noticias/1f/2022/01/21/hacker-usando-um-laptop-1642786034169_v2_4x3.jpg',
      'https://static.vecteezy.com/ti/vetor-gratis/p3/25463773-hacker-logotipo-projeto-uma-misterioso-e-perigoso-hacker-ilustracao-vetor.jpg',
      'https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg',
    ],
    title: 'Evento hackerman cancelado!',
    subtitle: 'Está programação foi cancelada por problemas técnicos',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    date: new Date(2024, 5, 20, 15, 30, 0, 0), // Ano, Mes, Dia, Hora, Min, Seg, Miliseg (O mês vai de 0 a 11, ex: 5 representa Junho)
    local: 'BSAS',
    posted: '31/05',
  },
  {
    images: [
      'https://wiki.inf.ufpr.br/computacao/lib/exe/fetch.php?w=400&tok=4a001d&media=https%3A%2F%2Fcdn.linuxfordevices.com%2Fwp-content%2Fuploads%2F2022%2F07%2Flinus-Torvalds.jpg',
      'https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg',
      'https://www.somenek.com.br/fx-files/images/big/11_plgNewsPoster.webp',
    ],
    title: 'Criador do Linux presente no OS AI',
    subtitle: 'Criador do Linux estará presente no evento base, no dia 25/06.',
    description:
      'É com grande entusiasmo que anunciamos a presença de Linus Torvalds, o renomado criador do Linux, no evento Base, que ocorrerá no dia 25 de junho. Esta é uma oportunidade única para profissionais e entusiastas da tecnologia interagirem com uma das figuras mais influentes da história da computação',
    date: new Date(2024, 6, 21, 15, 0, 0, 0), // Ano, Mes, Dia, Hora, Min, Seg, Miliseg (O mês vai de 0 a 11, ex: 5 representa Junho)
    local: 'Salão OS',
    posted: '29/05',
  },
  {
    images: [
      'https://s2-g1.glbimg.com/n6BIBllBbGnO1gw3D0GoWvGRzok=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/W/M/KDLcjeRFaVVkBEMHgfcg/20220103-reitoria-betomonteiro-3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Campus_Darcy_Ribeiro_%2831398447555%29.jpg/1200px-Campus_Darcy_Ribeiro_%2831398447555%29.jpg',
      'https://noticias.unb.br/images/Noticias/2023/08-Ago/20230425_campus-fga_valsdemir-carvalho_2.jpeg',
      'https://noticias.unb.br/images/Noticias/2023/08-Ago/20230425_campus-fga_valsdemir-carvalho_2.jpeg',
      'https://s2-g1.glbimg.com/WC-tK4BqijcmBKgQ2DRhR_CJzuc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/7/n/AmVxkYQMCOoQhA133uPg/nota-universidade-00022-frame-63.jpeg',
    ],
    title: 'What is Lorem Ipsum?',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: new Date(2024, 6, 22, 16, 0, 0, 0), // Ano, Mes, Dia, Hora, Min, Seg, Miliseg (O mês vai de 0 a 11, ex: 5 representa Junho)
    local: 'PAT',
    posted: '14/06',
  },
];

export default function AdminNewsPage() {
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ScrollView style={{ margin: 24 }}>
        {/* Titulo -> Substituir por componente PageTitle */}
        <PageTitle title="Gerenciamento de Conteúdo"></PageTitle>

        {posts.map((post) => (
          <View>
            <ImageBackground
              source={{ uri: post.images[0] }}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: 'center',
                overflow: 'hidden',
                borderRadius: 20,
                marginVertical: 8,
              }}
            >
              <YStack
                style={{
                  borderRadius: 20,
                  paddingRight: 16,
                  paddingVertical: 16,
                  flex: 1,
                }}
              >
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 9,
                    padding: 8,
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Text>Postado</Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {post.posted}
                  </Text>
                </View>
                <BlurView
                  intensity={15}
                  style={{
                    width: '85%',
                    overflow: 'hidden',
                    borderStartEndRadius: 20,
                    borderEndEndRadius: 20,
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    borderColor: 'rgba(0, 0, 0, 0.01)',
                    paddingRight: 12,
                    paddingLeft: 16,
                    paddingVertical: 20,
                    marginVertical: 12,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    {post.title}
                  </Text>
                </BlurView>
                <XStack
                  style={{
                    alignItems: 'center',
                    alignSelf: 'flex-end',
                    gap: 6,
                  }}
                >
                  <PopoverDelete post={post}></PopoverDelete>
                  <PopoverEdit post={post}></PopoverEdit>
                </XStack>
              </YStack>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      >
        <PopoverCreate></PopoverCreate>
      </View>
    </View>
  );
}
