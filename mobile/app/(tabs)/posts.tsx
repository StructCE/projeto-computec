import PageTitle from "@/src/components/PageTitle";
import PostCard from "@/src/components/PostsScreen/PostCard";
import { api } from "@/utils/api";
import { ScrollView, YStack } from "tamagui";
import { useState } from "react";
import { RefreshControl } from "react-native";

export default function News() {
  const [refreshing, setRefreshing] = useState(false);
  const posts = api.post.getPosts.useQuery();
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={posts.refetch} />
      }
    >
      <YStack margin={16} style={{ flex: 1, gap: 16 }}>
        <PageTitle title="Notícias"></PageTitle>
        {posts.data &&
          posts.data.map((post) => {
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
          })}
      </YStack>
    </ScrollView>
  );
}
