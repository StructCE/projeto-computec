import React from "react";
import { View, Text } from "tamagui";

export const LoadingScreen: React.FC = () => (
  <View flex={1} alignItems="center" justifyContent="center">
    <Text>Loading...</Text>
  </View>
);
