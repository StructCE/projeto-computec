import MaskedView from '@react-native-masked-view/masked-view';
import { Circle, Search } from '@tamagui/lucide-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, TextInput, View } from 'react-native';
import { Button, ScrollView, XStack, YStack } from 'tamagui';

export default function Index() {
  return (
    <ScrollView>
      <YStack margin="$4" style={{ flex: 1, gap: 12 }}>
        <MaskedView
          maskElement={
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: 'Maven Pro',
              }}
            >
              PROGRAMAÇÃO DA SEMANA
            </Text>
          }
        >
          <LinearGradient
            colors={['#a92227', '#ed7a17']}
            start={{ x: 0.5, y: 2 }}
            end={{ x: 0.5, y: -0.5 }}
            locations={[0.4, 1]}
            style={{
              height: 30,
            }}
          />
        </MaskedView>
        <View
          style={{
            flexDirection: 'row',
            height: 44,
            alignItems: 'center',
            backgroundColor: '#FFF',
            borderRadius: 5,
            shadowColor: '#1A1A1A',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Search
            size="$1.5"
            padding={12}
            color={'rgba(26,26,26,0.8)'}
            margin={10}
            style={{ alignItems: 'center' }}
          />
          <TextInput
            placeholder="Buscar evento"
            placeholderTextColor={'rgba(26,26,26,0.25)'}
            style={{ flex: 1, fontSize: 16, height: 40 }}
            underlineColorAndroid="transparent"
          />
        </View>
        <YStack style={{ gap: 4 }}>
          <Button
            style={{
              backgroundColor: '#000021',
              color: '#F2F2F2',
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 5,
              height: 42,
            }}
          >
            Domingo
          </Button>
          <Button
            style={{
              backgroundColor: '#000021',
              color: '#F2F2F2',
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 5,
              height: 42,
            }}
          >
            Segunda
          </Button>
          <Button
            style={{
              backgroundColor: '#000021',
              color: '#F2F2F2',
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 5,
              height: 42,
            }}
          >
            Terça
          </Button>
          <Button
            style={{
              backgroundColor: '#000021',
              color: '#F2F2F2',
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 5,
              height: 42,
            }}
          >
            Quarta
          </Button>
          <Button
            style={{
              backgroundColor: '#000021',
              color: '#F2F2F2',
              fontWeight: 'bold',
              fontSize: 16,
              borderRadius: 5,
              height: 42,
            }}
          >
            Quinta
          </Button>
        </YStack>

        {/* <YStack>
        <Text style={{ fontWeight: '500' }}>Legenda:</Text>
        <YStack
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: 6,
          }}
        >
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
              <Text style={{ fontSize: 10, width: 96 }}>
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
              <Circle size={16} fill={'#F2D12D'} color={'#F2D12D'}></Circle>
              <Text style={{ fontSize: 10, width: 96 }}>
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
              <Text style={{ fontSize: 10, width: 96 }}>
                Eventos Sociais de Promoção da Interação entre Participantes
              </Text>
            </XStack>
          </XStack>

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
              <Circle size={16} fill={'#12BD62'} color={'#12BD62'}></Circle>
              <Text style={{ fontSize: 10, width: 96 }}>
                Eventos Satélites do CSBC
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
              <Text style={{ fontSize: 10, width: 96 }}>
                Eventos-Base do CSBC
              </Text>
            </XStack>
            <XStack
              style={{
                flex: 1,
                alignItems: 'center',
                gap: 4,
              }}
            >
              <Circle size={16} fill={'#9D09B1'} color={'#9D09B1'}></Circle>
              <Text style={{ fontSize: 10, width: 96 }}>
                Eventos Especiais do CSBC
              </Text>
            </XStack>
          </XStack>
        </YStack>
      </YStack> */}

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
        <View style={{ alignItems: 'center', marginTop: 4 }}>
          <Text style={{ fontWeight: '500', fontSize: 24 }}>
            Segunda - 22 de Julho
          </Text>
        </View>
        <YStack style={{ gap: 5 }}>
          <Text style={{ fontWeight: 'bold' }}>8h30 - 10h30</Text>
          <View
            style={{
              backgroundColor: '#F2D12D',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontWeight: '600' }}>Reuniões SRs</Text>
            <Text>Sala: A definir</Text>
          </View>
          <View
            style={{
              backgroundColor: '#556AD2',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              borderRadius: 4,
            }}
          >
            <Text style={{ fontWeight: '600', color: 'white' }}>COMPUTEC</Text>
            <Text style={{ color: 'white' }}>Sala: A definir</Text>
          </View>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
