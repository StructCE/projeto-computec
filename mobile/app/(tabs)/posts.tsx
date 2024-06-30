import PostCard from "@/src/components/PostsScreen/PostCard";
import PageTitle from "@/src/components/PageTitle";
import { api } from "@/utils/api";
import { ScrollView, YStack, Text, View, Spinner } from "tamagui";
import { useState } from "react";
import { RefreshControl } from "react-native";

export default function News() {
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, isFetched, refetch } = api.post.getPosts.useQuery();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      <YStack margin={16} style={{ flex: 1, gap: 16 }}>
        <PageTitle title="Notícias"></PageTitle>
        {isLoading ? (
          <View>
            <Spinner size="large" color="$orange10" />
          </View>
        ) : isFetched && (!data || data.length === 0) ? (
          <Text
            fontSize={18}
            style={{
              fontFamily: "MavenProRegular",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Nenhuma notícia foi publicada.
          </Text>
        ) : (
          data &&
          data.map((post) => {
            return <PostCard key={post.id} post={post}></PostCard>;
          })
        )}
      </YStack>
    </ScrollView>
  );
}
