import { api } from "@/utils/api";
import { ScrollView } from "react-native";
import { View, YStack } from "tamagui";
import PageTitle from "@/src/components/PageTitle";
import { AdminPostCard } from "../../../src/components/Admin";
import { RefreshControl } from "react-native";
import { useState } from "react";
import { ManagePost } from "@/src/components/Admin";

export default function Crud() {
  const posts = api.post.getPosts.useQuery();
  const [refreshing, setRefresing] = useState(false);

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={posts.refetch} />
        }
      >
        <YStack margin={24} style={{ flex: 1, gap: 16 }}>
          <PageTitle title="Gerenciamento de Conteúdo"></PageTitle>
          {posts.data &&
            posts.data.map((post) => {
              return <AdminPostCard key={post.id} post={post}></AdminPostCard>;
            })}
        </YStack>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <ManagePost />
      </View>
    </View>
  );
}
