import React, { useEffect } from "react";
import { View, Text, XStack, Image } from "tamagui";
import { TouchableOpacity } from "react-native";
import { useAuth } from "@/utils/auth";
import { router } from "expo-router";

export default function Login() {
  const { signIn, userSession } = useAuth();

  useEffect(() => {
    if (userSession?.session) {
      router.push("/");
    }
  }, [userSession]);

  return (
    <View flex={1} jc={"center"} mb="$10" ai={"center"}>
      <View ai={"center"} mb="$12">
        <Text
          fontSize={"$9"}
          color={"#ED7A17"}
          style={{
            fontFamily: "MavenProSemiBold",
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontFamily: "MavenProRegular",
          }}
          mt={"$-1"}
          color={"1A1A1A"}
        >
          para membros internos
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          signIn("google");
        }}
      >
        <XStack
          br={8}
          ai={"center"}
          jc={"space-around"}
          bg="#ECECEC"
          paddingVertical="$2.5"
          w={"80%"}
        >
          <Image
            w={24}
            h={24}
            source={require("../../../../mobile/assets/images/google-icon.png")}
          />
          <Text
            fontSize="$4"
            ta={"center"}
            style={{ fontWeight: "bold", fontFamily: "InterMedium" }}
          >
            Entrar com Google
          </Text>
          <View w={24} h={24}></View>
        </XStack>
      </TouchableOpacity>

      <View my={"$2.5"} fd={"row"} ai={"center"}>
        <View marginRight={"$2"} w={"20%"} height={1} bg={"#E6E6E6"} />
        <View>
          <Text
            style={{
              fontFamily: "MavenProRegular",
            }}
            ta={"center"}
            color={"#B3B3B3"}
          >
            ou continue como
          </Text>
        </View>
        <View ml={"$2"} w={"20%"} height={1} bg={"#E6E6E6"} />
      </View>

      <TouchableOpacity onPress={() => signIn("github")}>
        <XStack
          br={8}
          ai={"center"}
          jc={"space-around"}
          bg="#ECECEC"
          paddingVertical="$2.5"
          w={"80%"}
        >
          <Image
            w={24}
            h={24}
            source={require("../../../../mobile/assets/images/github-icon.png")}
          />
          <Text
            fontSize="$4"
            ta={"center"}
            style={{ fontWeight: "bold", fontFamily: "InterMedium" }}
          >
            Entrar com Github
          </Text>
          <View w={24} h={24}></View>
        </XStack>
      </TouchableOpacity>

      <View my={"$3"} w={"80%"} height={1} bg={"#E6E6E6"} />

      <View paddingHorizontal="$6">
        <Text ta={"center"}>
          <Text
            style={{
              fontFamily: "MavenProRegular",
            }}
            color={"#B3B3B3"}
          >
            destinado à
          </Text>
          <Text
            style={{
              fontFamily: "MavenProRegular",
            }}
            color={"#1A1A1A"}
          >
            {" "}
            administração{" "}
          </Text>
          <Text
            style={{
              fontFamily: "MavenProRegular",
            }}
            color={"#B3B3B3"}
          >
            do aplicativo somente membros
          </Text>
          <Text
            style={{
              fontFamily: "MavenProRegular",
            }}
            color={"#1A1A1A"}
          >
            {" "}
            permitidos.
          </Text>
        </Text>
      </View>
    </View>
  );
}
