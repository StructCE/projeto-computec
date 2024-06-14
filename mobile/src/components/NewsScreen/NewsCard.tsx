import { BlurView } from 'expo-blur';
import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Image, Text, View, YStack } from 'tamagui';

type Post = {
  images: string[];
  title: string;
  subtitle: string;
  date: string;
};

const { width, height } = Dimensions.get('window');

export default function NewsCard({ post }: { post: Post }) {
  const margin = 16; // Ajustar de acordo com a margin da YStack na página 'app/(tabs)/news.tsx'
  const imageWidth = width - 2 * margin;

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    const numOfBackground = post.images.length;
    let scrollValue = 0,
      scrolled = 0;
    const intervalId = setInterval(() => {
      scrolled++;
      if (scrolled < numOfBackground) scrollValue = scrollValue + imageWidth;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      scrollViewRef.current?.scrollTo({ x: scrollValue, animated: true });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1, alignSelf: 'center' }}>
      <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled={true}>
        {post.images.map((image) => {
          return (
            <Image
              key={image}
              source={{
                uri: image,
              }}
              style={{
                width: imageWidth,
                height: height / 3,
                borderRadius: 20,
                padding: 12,
              }}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <YStack
          style={{
            borderRadius: 20,
            paddingVertical: 16,
            paddingRight: 16,
            alignSelf: 'center',
            width: imageWidth,
            height: '100%',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
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
              width: imageWidth - imageWidth / 5,
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
              <Text
                style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}
              >
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
              marginLeft: margin,
              textAlign: 'center',
              paddingVertical: 10,
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            Leia Mais
          </Link>
        </YStack>
      </View>
    </View>
  );
}
