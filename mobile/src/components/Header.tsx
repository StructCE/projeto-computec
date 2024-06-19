import { StatusBar, TouchableOpacity } from "react-native";
import { XStack, Image } from "tamagui";
import { Bell } from "@tamagui/lucide-icons";

const Header = () => {
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
      <TouchableOpacity>
        <Bell size={30} color={"black"} />
      </TouchableOpacity>
    </XStack>
  );
};

export default Header;
