import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import { ImageBackground } from 'react-native';
import { Button, Image, Text, View, YStack } from 'tamagui';

type Post = {
  image: string;
  title: string;
  subtitle: string;
  date: string;
};

export default function NewsCard({ post }: { post: Post }) {
  return (
    <ImageBackground source={{ uri: post.image }} borderRadius={20}>
      <YStack
        style={{
          borderRadius: 20,
          paddingVertical: 20,
          paddingRight: 20,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            width: 76,
            borderRadius: 9,
            padding: 8,
            alignItems: 'center',
            alignSelf: 'flex-end',
          }}
        >
          <Text>Postado</Text>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
            }}
          >
            {post.date}
          </Text>
        </View>
        <BlurView
          intensity={30}
          style={{
            width: 275,
            overflow: 'hidden',
            borderStartEndRadius: 20,
            borderEndEndRadius: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(0, 0, 0, 0.01)',
            paddingLeft: 24,
            paddingRight: 12,
            paddingVertical: 16,
            marginVertical: 12,
            flex: 1,
          }}
        >
          <YStack style={{ gap: 6 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>
              {post.title}
            </Text>
            <Text style={{ fontSize: 13, color: 'white' }}>
              {post.subtitle}
            </Text>
          </YStack>
        </BlurView>
        <Link
          href={{ pathname: '', params: {} }} // ToDo: link redirecionar para página do post
          style={{
            color: 'white',
            backgroundColor: '#C1272D',
            fontWeight: 'bold',
            width: 132,
            alignSelf: 'center',
            textAlign: 'center',
            paddingVertical: 10,
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          Leia Mais
        </Link>
      </YStack>
    </ImageBackground>
  );
}
