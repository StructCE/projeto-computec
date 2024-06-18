import { StatusBar } from "react-native";
import { XStack } from "tamagui";
import { Image } from "tamagui";
import { Bell } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const Header = () => {
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
      <TouchableOpacity>
        <Bell size={30} color={"black"} />
      </TouchableOpacity>
    </XStack>
  );
};

export default Header;
