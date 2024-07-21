import Header from "@/src/components/Header";
import { LinearGradient } from "@tamagui/linear-gradient";
import { BookOpenText, Home, Map, ScrollText } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

export default function TabNavigationLayout() {
  return (
    <>
      <Tabs
        backBehavior="history"
        screenOptions={({ route }) => ({
          header: () => (
            <Header
              routeName={route.name as "index" | "map" | "anais" | "posts"}
            />
          ),
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "white",
          tabBarAllowFontScaling: true,
          tabBarInactiveTintColor: "#dddddd",
          tabBarBackground: () => (
            <LinearGradient
              colors={["#a92227", "#ed7a17"]}
              locations={[0.4, 1]}
              style={{
                height: 78,
              }}
              start={[0, 0]}
              end={[1, 1]}
            />
          ),
          tabBarStyle: {
            height: 75,
            paddingBottom: 20,
            paddingTop: 6,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Início",
            tabBarIcon: ({ color }) => <Home size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: "Mapa",
            tabBarIcon: ({ color }) => <Map size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="anais"
          options={{
            title: "Anais",
            tabBarIcon: ({ color }) => <ScrollText size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="admin/login"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="admin/crud"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="listNotification"
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tabs.Screen
          name="posts"
          options={{
            title: "Notícias",
            tabBarIcon: ({ color }) => <BookOpenText size={26} color={color} />,
          }}
        />
        <Tabs.Screen
          name="post"
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </>
  );
}
