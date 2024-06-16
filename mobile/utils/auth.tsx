import * as Browser from "expo-web-browser";
import * as Linking from "expo-linking";
import * as SecureStore from "expo-secure-store";
import { api, getBaseUrl, setToken } from "./api";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthProps { 
    userSession?: {
        user: {
            id: string,
            name: string,
            email: string
        } | null,
        session: {
            id: string,
            userId: string,
            fresh: boolean,
            expiresAt: Date
        } | null
    },
    signIn: (provider: "google" | "github") => Promise<void>,
    logOut: () => Promise<Response | undefined>
}       

const API_ADDRESS = getBaseUrl();
const AuthContext = createContext<AuthProps>({
    userSession: undefined,
    signIn: async () => {},
    logOut: async () => undefined
});
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({children}: any) => {
    const [sessionToken, setSessionToken] = useState("");
    useEffect(() => {
        const token = SecureStore.getItem("session_token");
        if (token) {
            setSessionToken(token);
            setToken(token);
        }
    }, [])
    const userSession = api.user.getUserSession.useQuery({sessionId: sessionToken}).data;
    
    async function signIn(provider: "google" | "github") {
        const result = await Browser.openAuthSessionAsync(
            `${API_ADDRESS}/auth/login/${provider}`,
            `exp:${API_ADDRESS.split(":")[1]}:8081`
        );
        if (result.type !== "success") {
            return;
        } 
        const url = Linking.parse(result.url);
        const sessionToken = url.queryParams?.session_token?.toString() ?? null;
        if (!sessionToken)
            return;
        setSessionToken(sessionToken);
        setToken(sessionToken)
        await SecureStore.setItemAsync("session_token", sessionToken);
        return;
    };
    
    async function logOut() {
        const sessionToken =  SecureStore.getItem("session_token");
        if (!sessionToken)
            return
        const res = await fetch(`${API_ADDRESS}/auth/logout`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            }
        })
        SecureStore.deleteItemAsync("session_token");
        setSessionToken("");
        setToken("");
        return res;
    }

    const value = {
        userSession: userSession,
        signIn: signIn,
        logOut: logOut
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}