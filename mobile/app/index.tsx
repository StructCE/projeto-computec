import { Text, View } from "react-native";
import { Button } from "tamagui";
import { useAuth } from "@/utils/auth";

export default function Index() {
  const { userSession, signIn, logOut} = useAuth();
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> HomePage </Text>
      <Button onPress={signIn}> SignIn </Button> 
      <Text> {userSession?.user?.username || "Nao tem sessão"} </Text> 
      <Button onPress={logOut}> LogOut </Button> 
    </View>
  );
}
