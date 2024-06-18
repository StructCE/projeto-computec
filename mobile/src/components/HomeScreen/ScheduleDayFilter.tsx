import { Button, YStack } from "tamagui";
import React from "react";

export default function ScheduleDayFilter({
  state,
  setState,
}: {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <>
      <YStack style={{ gap: 4 }}>
        <Button
          onPress={() => setState(21)}
          style={{
            backgroundColor: "#000021",
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Domingo
        </Button>
        <Button
          onPress={() => setState(22)}
          style={{
            backgroundColor: "#000021",
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Segunda
        </Button>
        <Button
          onPress={() => setState(23)}
          style={{
            backgroundColor: "#000021",
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Terça
        </Button>
        <Button
          onPress={() => setState(24)}
          style={{
            backgroundColor: "#000021",
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Quarta
        </Button>
        <Button
          onPress={() => setState(25)}
          style={{
            backgroundColor: "#000021",
            color: "#F2F2F2",
            fontWeight: "bold",
            fontSize: 16,
            borderRadius: 5,
            height: 42,
          }}
        >
          Quinta
        </Button>
      </YStack>
    </>
  );
}
