import { View, Text, XStack, YStack } from "tamagui";
import { Link } from "expo-router"
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Anais() {
  return (
    <View>
      <MaskedView
        maskElement={
          <Text
            fontSize={20}
            style={{
              fontFamily: "MavenProBold",
            }}
          >
            ANAIS DE CONFERÊNCIA
          </Text>
        }
      >
        <LinearGradient
          colors={["#a92227", "#ed7a17"]}
          start={{ x: 0.5, y: 2 }}
          end={{ x: 0.5, y: -0.5 }}
          locations={[0.4, 1]}
          style={{
            height: 30,
          }}
        />
      </MaskedView>
      <View> 
        <Text>
        O XLIV Congresso da Sociedade Brasileira de Computação (CSBC 2024) foi realizado em X, no período de Y de 2024, organizado pelo Z, sob Coordenação Geral de A . Essa edição teve como tema "B".
        </Text>
      </View>
      <View>
        <Text style={{ fontWeight:"bold"}}>
          Eventos-Base
        </Text>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Text style={{ fontWeight:"bold"}}>
          Eventos-satélite
          </Text>
          <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
        <Link href="map" 
          style={
            {color: "blue", textDecorationLine:"underline"}
            }
            >
          Nome do arquivo/Nome do evento.pdf
        </Link>
      </View>
    </View>
  )
}