import { SplashScreen, Stack } from "expo-router";
import { TRPCProvider } from "@/utils/api";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import { AuthProvider } from "@/utils/auth";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import {
  MavenPro_400Regular,
  MavenPro_600SemiBold,
  MavenPro_500Medium,
  MavenPro_700Bold,
} from "@expo-google-fonts/maven-pro";

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    InterMedium: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    MavenProRegular: MavenPro_400Regular,
    MavenProMedium: MavenPro_500Medium,
    MavenProSemiBold: MavenPro_600SemiBold,
    MavenProBold: MavenPro_700Bold,
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
