import NewsCard from '@/src/components/NewsScreen/NewsCard';
import PageTitle from '@/src/components/PageTitle';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, View, YStack } from 'tamagui';

export default function News() {
  const post1 = {
    images: [
      'https://conteudo.imguol.com.br/c/noticias/1f/2022/01/21/hacker-usando-um-laptop-1642786034169_v2_4x3.jpg',
      'https://ravel.com.br/blog/wp-content/uploads/2022/08/Hackers-do-dia-a-dia-Capa.jpg',
      'https://static.vecteezy.com/ti/vetor-gratis/p3/25463773-hacker-logotipo-projeto-uma-misterioso-e-perigoso-hacker-ilustracao-vetor.jpg',
      'https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg',
    ],
    title: 'Evento hackerman cancelado!',
    subtitle: 'Está programação foi cancelada por problemas técnicos',
    date: '31/05',
  };
  const post2 = {
    images: [
      'https://wiki.inf.ufpr.br/computacao/lib/exe/fetch.php?w=400&tok=4a001d&media=https%3A%2F%2Fcdn.linuxfordevices.com%2Fwp-content%2Fuploads%2F2022%2F07%2Flinus-Torvalds.jpg',
      'https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg',
      'https://www.somenek.com.br/fx-files/images/big/11_plgNewsPoster.webp',
    ],
    title: 'Criador do Linux presente no OS AI',
    subtitle: 'Criador do Linux estará presente no evento base, no dia 25/06.',
    date: '29/05',
  };
  const post3 = {
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Campus_Darcy_Ribeiro_%2831398447555%29.jpg/1200px-Campus_Darcy_Ribeiro_%2831398447555%29.jpg',
      'https://s2-g1.glbimg.com/n6BIBllBbGnO1gw3D0GoWvGRzok=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/W/M/KDLcjeRFaVVkBEMHgfcg/20220103-reitoria-betomonteiro-3.jpg',
      'https://noticias.unb.br/images/Noticias/2023/08-Ago/20230425_campus-fga_valsdemir-carvalho_2.jpeg',
      'https://noticias.unb.br/images/Noticias/2023/08-Ago/20230425_campus-fga_valsdemir-carvalho_2.jpeg',
      'https://s2-g1.glbimg.com/WC-tK4BqijcmBKgQ2DRhR_CJzuc=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/7/n/AmVxkYQMCOoQhA133uPg/nota-universidade-00022-frame-63.jpeg',
    ],
    title: 'What is Lorem Ipsum?',
    subtitle:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: '14/06',
  };

  return (
    <ScrollView>
      <YStack margin={16} style={{ flex: 1, gap: 16 }}>
        <PageTitle title="Notícias"></PageTitle>
        {/* ToDo: notícias vindas do banco de dados */}
        <NewsCard post={post1}></NewsCard>
        <NewsCard post={post2}></NewsCard>
        <NewsCard post={post3}></NewsCard>
      </YStack>
    </ScrollView>
  );
}
