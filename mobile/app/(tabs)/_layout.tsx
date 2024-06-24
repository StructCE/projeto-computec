import Header from '@/src/components/Header';
import { LinearGradient } from '@tamagui/linear-gradient';
import { BookOpenText, Home, Map, ScrollText } from '@tamagui/lucide-icons';
import { Tabs } from 'expo-router';

export default function TabNavigationLayout() {
  return (
    <>
      <Tabs
        backBehavior="history"
        screenOptions={({ route }) => ({
          header: () => (
            <Header
              routeName={route.name as 'index' | 'map' | 'anais' | 'news'}
            />
          ),
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#CBC8C8',
          tabBarBackground: () => (
            <LinearGradient
              colors={['#a92227', '#ed7a17']}
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
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarIcon: ({ color }) => <Home size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            title: 'Mapa',
            tabBarIcon: ({ color }) => <Map size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="anais"
          options={{
            title: 'Anais',
            tabBarIcon: ({ color }) => <ScrollText size={30} color={color} />,
          }}
        />
        <Tabs.Screen
          name="admin/login"
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
          name="news"
          options={{
            title: 'Notícias',
            tabBarIcon: ({ color }) => <BookOpenText size={30} color={color} />,
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
