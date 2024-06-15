import { BlurView } from 'expo-blur';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Image, Text, View, XStack, YStack } from 'tamagui';

const { width, height } = Dimensions.get('window');

export default function NewsPage() {
  const params = useLocalSearchParams();
  const {
    images = [],
    title,
    subtitle,
    description,
    date,
    time,
    local,
    posted,
  } = params;

  let imageArray = Array.isArray(images) ? images : [images];
  imageArray = imageArray[0].split(',');

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    const numOfBackground = images!.length;
    let scrollValue = 0,
      scrolled = 0;
    const intervalId = setInterval(() => {
      scrolled++;
      if (scrolled < numOfBackground) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      scrollViewRef.current?.scrollTo({ x: scrollValue, animated: true });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ScrollView style={{ flex: 1, gap: 16 }}>
      <View style={{ flex: 1, alignSelf: 'center' }}>
        <ScrollView ref={scrollViewRef} horizontal={true} pagingEnabled={true}>
          {imageArray.map((image) => {
            return (
              <Image
                key={image} // Mudar para id da notícia
                source={{
                  uri: image,
                }}
                style={{
                  width: width,
                  height: height / 3,
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
              paddingTop: 16,
              paddingRight: 16,
              alignSelf: 'center',
              width: width,
              flex: 1,
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
                {posted}
              </Text>
            </View>
            <BlurView
              intensity={15}
              style={{
                width: width - width / 6,
                overflow: 'hidden',
                borderStartEndRadius: 20,
                borderEndEndRadius: 20,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(0, 0, 0, 0.01)',
                paddingLeft: 24,
                paddingRight: 12,
                paddingVertical: 20,
                marginVertical: 12,
              }}
            >
              <YStack style={{ gap: 6 }}>
                <Text
                  style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}
                >
                  {title}
                </Text>
                <Text style={{ fontSize: 13, color: 'white' }}>{subtitle}</Text>
              </YStack>
            </BlurView>
          </YStack>
        </View>
      </View>
      <YStack style={{ margin: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' }}>
          Detalhes
        </Text>
        <Text style={{ marginVertical: 12 }}>{description}</Text>
        <XStack style={{ gap: 4, marginVertical: 1 }}>
          <Text>Dia:</Text>
          <Text style={{ fontWeight: 'bold' }}>{date}</Text>
        </XStack>
        <XStack style={{ gap: 4, marginVertical: 1 }}>
          <Text>Horário do Evento:</Text>
          <Text style={{ fontWeight: 'bold' }}>{time}</Text>
        </XStack>
        <XStack style={{ gap: 4, marginVertical: 1 }}>
          <Text>Local:</Text>
          <Text style={{ fontWeight: 'bold' }}>{local}</Text>
        </XStack>
      </YStack>
    </ScrollView>
  );
}
