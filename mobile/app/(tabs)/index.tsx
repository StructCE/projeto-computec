import { Text, View } from "react-native";
import { Button } from "tamagui";
import { useAuth } from "@/utils/auth";
import { api } from "@/utils/api";

export default function Index() {
  const { userSession, signIn, logOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> HomePage </Text>
      <Button onPress={() => signIn("github")}> SignIn with GitHub </Button>
      <Button onPress={() => signIn("google")}> SignIn with Google </Button>
      <Text> {userSession?.user?.name || "Nao tem sessão"} </Text>
      <Button onPress={logOut}> LogOut </Button>
    </View>
  );
}
