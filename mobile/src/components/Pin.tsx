import { YStack, Text, Image } from "tamagui";
import { TouchableOpacity } from "react-native";
import Popover from "react-native-popover-view";
import { useRef, useState } from "react";
import { LocalPositions } from "@/constants/interfaces/localPositions";

const Pin = (localPositions: LocalPositions) => {
  const [showPopover, setShowPopover] = useState(false);

  const touchable = useRef(null);

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        onPress={() => setShowPopover(true)}
        style={{
          position: "absolute",
          left: localPositions.posLeft,
          top: localPositions.posTop,
        }}
      >
        <Image
          source={require("../../../mobile/assets/images/pin.png")}
          width={18}
          height={21}
        />
      </TouchableOpacity>

      <Popover
        popoverStyle={{ borderRadius: 10, backgroundColor: "#F2F2F2" }}
        from={touchable}
        isVisible={showPopover}
        onRequestClose={() => setShowPopover(false)}
      >
        <YStack padding="$2" ai={"center"}>
          <Text fontSize={12} style={{ fontFamily: "MavenProBold" }}>
            {localPositions.localName}
          </Text>
          <Text fontSize={10} style={{ fontFamily: "MavenProMedium" }}>
            {localPositions.originalLocation}
          </Text>
        </YStack>
      </Popover>
    </>
  );
};

export default Pin;
