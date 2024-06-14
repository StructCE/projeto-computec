import { StatusBar } from "react-native";
import { XStack } from "tamagui";
import { Image } from "tamagui";
import { Bell, UserRoundCog } from "lucide-react-native";
import { Link } from "expo-router";

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
        <Bell size={30} color={"black"} />
      ) : (
        <Link href={"(tabs)/admin/login"}>
          <UserRoundCog size={30} color={"black"} />
        </Link>
      )}
    </XStack>
  );
};

export default Header;
