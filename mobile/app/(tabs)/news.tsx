import PageTitle from "@/src/components/PageTitle";
import PostCard from "@/src/components/PostsScreen/PostCard";
import { api } from "@/utils/api";
import { ScrollView, YStack } from "tamagui";

export default function News() {
  const posts = api.post.getPosts.useQuery();

  return (
    <ScrollView>
      <YStack margin={16} style={{ flex: 1, gap: 16 }}>
        <PageTitle title="Notícias"></PageTitle>
        {posts.data &&
          posts.data.map((post) => {
            return <PostCard key={post.id} post={post}></PostCard>;
          })}
      </YStack>
    </ScrollView>
  );
}
