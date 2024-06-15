import { BlurView } from 'expo-blur';
import { useLocalSearchParams } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Text, View, XStack, YStack } from 'tamagui';

const { width, height } = Dimensions.get('window');

export default function NewsPage() {
  const {
    images = [],
    title,
    subtitle,
    description,
    date,
    time,
    local,
    posted,
  } = useLocalSearchParams(); // Parametros passados pelo Link do expo-router

  let imageArray = Array.isArray(images) ? images : [images]; // Corrige erro do map (possivelmente undefined)
  imageArray = imageArray[0].split(','); // Separa os links ['link1,link2,link3'] -> ['link1','link2','link3']

  const scrollViewRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex - 1) * width,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < imageArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    }
  };

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
                marginBottom: 20,
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
            <XStack
              style={{
                justifyContent: 'space-between',
                width: width,
                position: 'absolute',
                bottom: 16,
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 25,
                  left: 16,
                }}
                onPress={handlePrev}
              >
                <ArrowLeft size={22} color="white" strokeWidth={2} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 5,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 25,
                  right: 16,
                }}
                onPress={handleNext}
              >
                <ArrowRight size={22} color="white" strokeWidth={2} />
              </TouchableOpacity>
            </XStack>
          </YStack>
        </View>
      </View>
      <YStack style={{ margin: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' }}>
          Detalhes
        </Text>
        <Text style={{ marginVertical: 12, textAlign: 'justify' }}>
          {description}
        </Text>
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
