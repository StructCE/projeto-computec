import { Circle } from '@tamagui/lucide-icons';
import { Text } from 'react-native';
import { XStack, YStack } from 'tamagui';

export default function ScheduleLegend() {
  return (
    <>
      <YStack>
        <Text style={{ fontWeight: '500', marginBottom: 6 }}>Legenda:</Text>
        <YStack
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: 6,
          }}
        >
          {/* LINHA 1 */}
          <XStack
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              gap: 6,
            }}
          >
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#52AED5'} color={'#52AED5'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Abertura e Sessões Nobres
              </Text>
            </XStack>
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#12BD62'} color={'#12BD62'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Eventos Satélites do CSBC
              </Text>
            </XStack>
          </XStack>

          {/* LINHA 2 */}
          <XStack
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              gap: 6,
            }}
          >
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#F2D12D'} color={'#F2D12D'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Reuniões Organizações pela SBC
              </Text>
            </XStack>
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#F6921E'} color={'#F6921E'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Eventos Sociais de Promoção da Interação entre Participantes
              </Text>
            </XStack>
          </XStack>

          {/* LINHA 3 */}
          <XStack
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'stretch',
              gap: 6,
            }}
          >
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#9D09B1'} color={'#9D09B1'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Eventos Especiais do CSBC
              </Text>
            </XStack>
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#556AD2'} color={'#556AD2'}></Circle>
              <Text style={{ fontSize: 11, width: 156 }}>
                Eventos-Base do CSBC
              </Text>
            </XStack>
          </XStack>
        </YStack>
      </YStack>
    </>
  );
}
