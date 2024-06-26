import { StatusBar } from "react-native";
import { View, XStack, Image } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Bell, UserRoundCog } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useAuth } from "@/utils/auth";

type RouteNames = "index" | "map" | "anais" | "news";

type HeaderProps = {
  routeName: RouteNames;
};

const Header = ({ routeName }: HeaderProps) => {
  const { userSession } = useAuth();
  return (
    <XStack
      ai={"center"}
      marginHorizontal="$5"
      justifyContent="space-between"
      marginTop={StatusBar.currentHeight}
    >
      <Image
        source={require("../../../mobile/assets/images/CSBC_logo.png")}
        width={100}
        height={100}
      />
      {routeName !== "news" ? (
        <Link href={"/listNotification"}>
          <Bell size={30} color={"black"} />
        </Link>
      ) : (
        <Link href={userSession ? "(tabs)/admin/crud" : "(tabs)/admin/login"}>
          <View>
            <XStack>
              <LinearGradient
                colors={["#a92227", "#ed7a17"]}
                start={{ x: 0, y: 1 }}
                locations={[0.4, 1]}
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 1000,
                  borderStyle: "solid",
                  borderCurve: "circular",
                  padding: 20,
                }}
              />
              <UserRoundCog // Verificar se o icone foge do gradiente em diferentes telas
                style={{ position: "absolute", top: 2, left: 6 }}
                size={30}
                color={"white"}
              />
            </XStack>
          </View>
        </Link>
      )}
    </XStack>
  );
};

export default Header;
