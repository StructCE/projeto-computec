import { Post } from "@/constants/interfaces/post";
import { Text, XStack, YStack } from "tamagui";

export const PostDetails = ({
  description,
  dateTime,
  local,
}: Pick<Post, "description" | "dateTime" | "local">) => (
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
      {description}
    </Text>
    {dateTime && (
      <>
        <DetailRow
          label="Dia:"
          value={`${String(dateTime.getDate()).padStart(2, "0")}/${String(
            dateTime.getMonth() + 1
          ).padStart(2, "0")}`}
        />
        <DetailRow
          label="Horário do Evento:"
          value={`${String(dateTime.getHours()).padStart(2, "0")}:${String(
            dateTime.getMinutes()
          ).padStart(2, "0")}`}
        />
      </>
    )}
    {local && <DetailRow label="Local:" value={local} />}
  </YStack>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <XStack gap={4} marginVertical={1}>
    <Text fontSize={13} style={{ fontFamily: "MavenProRegular" }}>
      {label}
    </Text>
    <Text fontSize={13} style={{ fontFamily: "MavenProMedium" }}>
      {value}
    </Text>
  </XStack>
);
