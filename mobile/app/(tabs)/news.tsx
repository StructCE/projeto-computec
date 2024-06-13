import NewsCard from '@/src/components/NewsScreen/NewsCard';
import PageTitle from '@/src/components/PageTitle';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, View, YStack } from 'tamagui';

export default function News() {
  const post1 = {
    image:
      'https://conteudo.imguol.com.br/c/noticias/1f/2022/01/21/hacker-usando-um-laptop-1642786034169_v2_4x3.jpg',
    title: 'Evento hackerman cancelado!',
    subtitle: 'Está programação foi cancelada por problemas técnicos',
    date: '31/05',
  };
  const post2 = {
    image:
      'https://wiki.inf.ufpr.br/computacao/lib/exe/fetch.php?w=400&tok=4a001d&media=https%3A%2F%2Fcdn.linuxfordevices.com%2Fwp-content%2Fuploads%2F2022%2F07%2Flinus-Torvalds.jpg',
    title: 'Criador do Linux presente no OS AI',
    subtitle: 'Criador do Linux estará presente no evento base, no dia 25/06.',
    date: '29/05',
  };

  return (
    <ScrollView>
      <YStack margin="$4" style={{ flex: 1, gap: 24 }}>
        <PageTitle title="Notícias"></PageTitle>
        {/* ToDo: notícias vindas do banco de dados */}
        <NewsCard post={post1}></NewsCard>
        <NewsCard post={post2}></NewsCard>
      </YStack>
    </ScrollView>
  );
}
