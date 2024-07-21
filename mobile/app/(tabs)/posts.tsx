import PageTitle from "@/src/components/PageTitle";
import PostCard from "@/src/components/PostsScreen/PostCard";
import { api } from "@/utils/api";
import { ScrollView, YStack, Text, View, Spinner } from "tamagui";
import { useState } from "react";
import { RefreshControl } from "react-native";

export default function Posts() {
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, isFetched, refetch } = api.post.getPosts.useQuery();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      <YStack margin={16} gap={16} style={{ flex: 1 }}>
        <PageTitle title="Notícias" />
        {isLoading ? (
          <View marginTop="$4">
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
            Nenhuma notícia ainda foi publicada.
          </Text>
        ) : (
          data &&
          data.map((post) => {
            return (
              <PostCard
                key={post.id}
                id={post.id}
                created_at={post.created_at}
                title={post.title}
                subtitle={post.subtitle}
                images={post.images}
              ></PostCard>
            );
          })
        )}
      </YStack>
    </ScrollView>
  );
}
