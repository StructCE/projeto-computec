import * as Browser from "expo-web-browser";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import { api, setToken } from "./api";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Platform } from "react-native";

const Store =
  Platform.OS === "web"
    ? {
        setITem: Cookies.set,
        getItem: Cookies.get,
        deleteItem: Cookies.remove,
      }
    : {
        setITem: SecureStore.setItem,
        getItem: SecureStore.getItem,
        deleteItem: SecureStore.deleteItemAsync,
      };

interface AuthProps {
  userSession?: {
    user: {
      id: string;
      name: string;
      email: string;
    } | null;
    session: {
      id: string;
      userId: string;
      fresh: boolean;
      expiresAt: Date;
    } | null;
  };
  signIn: (provider: "google" | "github") => Promise<void>;
  logOut: () => Promise<Response | undefined>;
}

const AuthContext = createContext<AuthProps>({
  userSession: undefined,
  signIn: async () => {},
  logOut: async () => undefined,
});
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [sessionToken, setSessionToken] = useState("");
  useEffect(() => {
    const token = Store.getItem("session_token");
    if (token) {
      setSessionToken(token);
      setToken(token);
    }
  }, []);
  const userSession = api.user.getUserSession.useQuery({
    sessionId: sessionToken,
  }).data;

  async function signIn(provider: "google" | "github") {
    const result = await Browser.openAuthSessionAsync(
      `${process.env.EXPO_PUBLIC_API_URL}/auth/login/${provider}`,
      `exp://192.168.100.16:8081/`
    );
    if (result.type !== "success") {
      return;
    }
    const url = Linking.parse(result.url);
    const sessionToken = url.queryParams?.session_token?.toString() ?? null;
    if (!sessionToken) return;
    setSessionToken(sessionToken);
    setToken(sessionToken);
    Store.setITem("session_token", sessionToken);
    return;
  }

  async function logOut() {
    const sessionToken = Store.getItem("session_token");
    if (!sessionToken) return;
    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });
    Store.deleteItem("session_token");
    setSessionToken("");
    setToken("");
    return res;
  }

  const value = {
    userSession: userSession,
    signIn: signIn,
    logOut: logOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
