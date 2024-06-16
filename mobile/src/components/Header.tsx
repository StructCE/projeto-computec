import { StatusBar } from "react-native";
import { View, XStack } from "tamagui";
import { Image } from "tamagui";
import { Bell, UserRoundCog } from "lucide-react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type RouteNames = "index" | "map" | "anais" | "news";

type HeaderProps = {
  routeName: RouteNames;
};

const Header = ({ routeName }: HeaderProps) => {
  return (
    <XStack
      ai={"center"}
      marginHorizontal="$5"
      justifyContent="space-between"
      marginTop={StatusBar.currentHeight}
    >
      <Image //Implementar redirecionamento para home usando Link ou TouchableOpacity sem quebrar o padding
        source={require("../../../mobile/assets/images/CSBC_logo.png")}
        width={100}
        height={100}
      />
      {routeName !== "news" ? (
        <Link href={"/listNotification"}>
          <Bell size={30} color={"black"} />
        </Link>
      ) : (
        <Link href={"(tabs)/admin/login"}>
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
