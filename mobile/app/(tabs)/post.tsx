import { useLocalSearchParams, router } from "expo-router";
import { ArrowLeftCircle } from "@tamagui/lucide-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "tamagui";
import { api } from "@/utils/api";
import {
  PostImages,
  PostDetails,
  LoadingScreen,
} from "@/src/components/PostScreen";

const PostPage: React.FC = () => {
  const { id }: { id?: string | undefined } = useLocalSearchParams();
  const {
    data: post,
    isLoading,
    isError,
  } = api.post.getPost.useQuery({ id: id as string });

  if (!id || isError) {
    router.navigate("/");
    return null;
  }

  if (isLoading || !post) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView flex={1} gap={16}>
      <TouchableOpacity
        onPress={router.back}
        style={{ marginLeft: 10, marginBottom: 20 }}
      >
        <ArrowLeftCircle strokeWidth={2} size={32} color={"black"} />
      </TouchableOpacity>
      <PostImages post={post} />
      <PostDetails post={post} />
    </ScrollView>
  );
};

export default PostPage;
