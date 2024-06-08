import { Tabs } from "expo-router";
import { Home, Map, ScrollText, BookOpenText } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function TabNavigationLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#CBC8C8",
        tabBarBackground: () => (
          <LinearGradient
            colors={["#a92227", "#ed7a17"]}
            start={{ x: 0, y: 1 }}
            locations={[0.4, 1]}
            style={{
              height: 70,
            }}
          />
        ),
        tabBarStyle: {
          height: `${8}%`,
          paddingBottom: `${2}%`,
          paddingTop: `${2}%`,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",

          tabBarIcon: ({ color }) => <Home size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Mapa",
          tabBarIcon: ({ color }) => <Map size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="anais"
        options={{
          title: "Anais",
          tabBarIcon: ({ color }) => <ScrollText size={30} color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "Notícias",
          tabBarIcon: ({ color }) => <BookOpenText size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}
