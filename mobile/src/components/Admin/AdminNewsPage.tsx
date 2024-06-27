import { api } from '@/utils/api';
import { ScrollView } from 'react-native';
import { View, YStack } from 'tamagui';
import PageTitle from '../PageTitle';
import AdminNewsPageCard from './AdminNewsPageCard';
import PopoverCreate from './PopoverCreate';

export default function AdminNewsPage() {
  const posts = api.post.getPosts.useQuery();

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <ScrollView>
        <YStack margin={24} style={{ flex: 1, gap: 16 }}>
          <PageTitle title="Gerenciamento de Conteúdo"></PageTitle>
          {posts.data &&
            posts.data.map((post) => {
              return (
                <AdminNewsPageCard
                  key={post.id}
                  post={post}
                ></AdminNewsPageCard>
              );
            })}
        </YStack>
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
