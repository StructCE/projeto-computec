import React from "react";
import { Text, XStack, YStack } from "tamagui";

type Props = {
  post: {
    id: string;
    description: string;
    dateTime?: Date | null;
    local?: string | null;
  };
};

export const PostDetails: React.FC<Props> = ({ post }) => (
  <YStack margin={20}>
    <Text
      fontSize={24}
      style={{ fontFamily: "MavenProSemiBold" }}
      color="#1A1A1A"
    >
      DETALHES
    </Text>
    <Text
      marginVertical={12}
      fontSize={14}
      textAlign="justify"
      style={{ fontFamily: "MavenProRegular" }}
    >
      {post.description}
    </Text>
    {post.dateTime && (
      <>
        <DetailRow
          label="Dia:"
          value={`${post.dateTime.getDate()}/${String(
            post.dateTime.getMonth() + 1
          ).padStart(2, "0")}`}
        />
        <DetailRow
          label="Horário do Evento:"
          value={`${String(post.dateTime.getHours()).padStart(2, "0")}:${String(
            post.dateTime.getMinutes()
          ).padStart(2, "0")}`}
        />
      </>
    )}
    {post.local && <DetailRow label="Local:" value={post.local} />}
  </YStack>
);

const DetailRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <XStack gap={4} marginVertical={1}>
    <Text fontSize={13} style={{ fontFamily: "MavenProRegular" }}>
      {label}
    </Text>
    <Text fontSize={13} style={{ fontFamily: "MavenProMedium" }}>
      {value}
    </Text>
  </XStack>
);
