import { YStack, Text, Image } from "tamagui";
import { TouchableOpacity } from "react-native";
import Popover from "react-native-popover-view";
import { useRef, useState } from "react";

export type LocalPositions = {
  localName: string;
  originalLocation: string;
  PosLeft: number;
  PosTop: number;
};

const Pin = (props: LocalPositions) => {
  const [showPopover, setShowPopover] = useState(false);

  const touchable = useRef(null);

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        onPress={() => setShowPopover(true)}
        style={{ position: "absolute", left: props.PosLeft, top: props.PosTop }}
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
            {props.localName}
          </Text>
          <Text fontSize={10} style={{ fontFamily: "MavenProMedium" }}>
            {props.originalLocation}
          </Text>
        </YStack>
      </Popover>
    </>
  );
};

export default Pin;
