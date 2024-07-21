import { Button, YStack } from "tamagui";
import React from "react";

export function ScheduleDayFilter({
  state,
  setState,
}: {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}) {
  const getButtonStyle = (day: number) => {
    if (state === day) {
      return {
        backgroundColor: "#F2F2F2",
        color: "#000000",
        fontSize: 17,
        borderRadius: 5,
        height: 42,
        borderWidth: 2,
        borderColor: "#000000",
        fontWeight: "bold",
        fontFamily: "MavenProBold",
      };
    }
    return {
      backgroundColor: "#000021",
      color: "#F2F2F2",
      fontSize: 17,
      borderRadius: 5,
      height: 42,
      fontWeight: "bold",
      fontFamily: "MavenProBold",
    };
  };

  const getButtonPressStyle = (day: number) => {
    if (state !== day) {
      return {
        backgroundColor: "#000021",
      };
    }
  };

  return (
    <YStack gap={4}>
      <Button
        onPress={() => setState(21)}
        style={getButtonStyle(21)}
        hoverStyle={getButtonPressStyle(21)}
        pressStyle={getButtonPressStyle(21)}
      >
        Domingo
      </Button>
      <Button
        onPress={() => setState(22)}
        style={getButtonStyle(22)}
        hoverStyle={getButtonPressStyle(22)}
        pressStyle={getButtonPressStyle(22)}
      >
        Segunda
      </Button>
      <Button
        onPress={() => setState(23)}
        style={getButtonStyle(23)}
        hoverStyle={getButtonPressStyle(23)}
        pressStyle={getButtonPressStyle(23)}
      >
        Terça
      </Button>
      <Button
        onPress={() => setState(24)}
        style={getButtonStyle(24)}
        hoverStyle={getButtonPressStyle(24)}
        pressStyle={getButtonPressStyle(24)}
      >
        Quarta
      </Button>
      <Button
        onPress={() => setState(25)}
        style={getButtonStyle(25)}
        hoverStyle={getButtonPressStyle(25)}
        pressStyle={getButtonPressStyle(25)}
      >
        Quinta
      </Button>
    </YStack>
  );
}
