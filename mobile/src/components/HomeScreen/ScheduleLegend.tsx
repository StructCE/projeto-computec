import { Circle } from '@tamagui/lucide-icons';
import { Text } from 'react-native';
import { View, XStack, YStack } from 'tamagui';

export default function ScheduleLegend() {
  return (
    <>
      <YStack>
        <Text style={{ fontWeight: '500', marginBottom: 6, fontSize: 15 }}>
          Legenda:
        </Text>
        {/* LINHA 1 */}
        <XStack style={{ flex: 1, gap: 20 }}>
          <XStack
            style={{
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Circle size={16} fill={'#52AED5'} color={'#52AED5'}></Circle>
            <Text style={{ fontSize: 13 }}>Cerrado (Térreo)</Text>
          </XStack>
          <XStack
            style={{
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Circle size={16} fill={'#556AD2'} color={'#556AD2'}></Circle>
            <Text style={{ fontSize: 13 }}>Praça dos Ipês (Piso Superior)</Text>
          </XStack>
        </XStack>
      </YStack>
    </>
  );
}
