import { SplashScreen, Stack } from "expo-router";
import { TRPCProvider } from "@/utils/api";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import { AuthProvider } from "@/utils/auth";
import { useEffect } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }
  return (
    <TRPCProvider>
      <AuthProvider>
        <TamaguiProvider config={tamaguiConfig}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </TamaguiProvider>
      </AuthProvider>
    </TRPCProvider>
  );
}
