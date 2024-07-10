import { useLocalSearchParams, router } from "expo-router";
import { ArrowLeftCircle } from "@tamagui/lucide-icons";
import React, { useState } from "react";
import { TouchableOpacity, RefreshControl } from "react-native";
import { ScrollView, View, Spinner } from "tamagui";
import { api } from "@/utils/api";
import { PostImages, PostDetails } from "@/src/components/PostScreen";

export default function PostPage() {
  const [refreshing, setRefreshing] = useState(false);
  const { id }: { id?: string | undefined } = useLocalSearchParams();
  const {
    data: post,
    isLoading,
    isError,
    refetch,
  } = api.post.getPost.useQuery({ id: id as string });

  if (!id || isError) {
    router.navigate("/");
    return null;
  }

  if (isLoading || !post) {
    return (
      <View>
        <Spinner size="large" color="$orange10" />
      </View>
    );
  }

  return (
    <ScrollView
      flex={1}
      gap={16}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refetch} />
      }
    >
      <TouchableOpacity
        onPress={router.back}
        style={{
          marginLeft: 10,
          marginBottom: 20,
          width: 32,
        }}
      >
        <ArrowLeftCircle
          onPress={router.back}
          strokeWidth={2}
          size={32}
          color={"black"}
        />
      </TouchableOpacity>
      <PostImages
        title={post.title}
        subtitle={post.subtitle}
        created_at={post.created_at}
        images={post.images}
      />
      <PostDetails
        description={post.description}
        dateTime={post.dateTime}
        local={post.local}
      />
    </ScrollView>
  );
}
