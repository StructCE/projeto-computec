import { eventosBase, eventosSatelite } from "@/constants/eventsAndLinks";
import { View, Text, ScrollView } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Link } from "expo-router";
import MaskedView from "@react-native-masked-view/masked-view";

export default function Anais() {
  return (
    <ScrollView>
      <View
        gap={20}
        justifyContent="center"
        marginHorizontal={30}
        marginBottom={25}
      >
        <View>
          <MaskedView
            maskElement={
              <Text
                fontSize="$5"
                textAlign="center"
                style={{
                  fontFamily: "MavenProBold",
                }}
              >
                Anais de Conferência
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
          <Text
            fontSize="$3"
            textAlign="center"
            style={{ fontFamily: "MavenProBold" }}
          >
            2024: Anais do XLIV Congresso da Sociedade Brasileira da Computação
          </Text>
        </View>
        <Text
          fontSize="$3"
          textAlign="center"
          style={{ fontFamily: "MavenProRegular" }}
        >
          O XLIV Congresso da Sociedade Brasileira de Computação (CSBC 2024) foi
          realizado em Brasília, no período de 21 a 25 de julho de 2024, no
          Complexo Brasil 21, sob Coordenação Geral de Marcelo Antonio Marotta
          (UnB) e Lisandro Zambenedetti Granville (UFRGS). Essa edição teve como
          tema "Deserto Digital: O Mundo Desconectado e Não Visto". A
          Coordenação de Publicações ficou a cargo de Moisés Silva (UnB), que
          organizou, em conjunto com os coordenadores de cada evento, todos os
          volumes que concentram os trabalhos científicos aprovados nos
          subeventos do CSBC 2024, enumerados abaixo.
        </Text>
        <View gap={10}>
          <Text style={{ fontFamily: "MavenProBold" }}>Eventos-Base</Text>
          <View gap={7} marginLeft={12}>
            {eventosBase.map((eventoBase, idx) => (
              <Link
                key={idx}
                href={eventoBase[1]}
                style={{
                  fontFamily: "MavenProRegular",
                  fontSize: 12,
                  color: "#C1272D",
                  textDecorationLine: "underline",
                }}
              >
                {eventoBase[0]}
              </Link>
            ))}
          </View>
          <Text style={{ fontFamily: "MavenProBold" }}>Eventos-satélite</Text>
          <View gap={7} marginLeft={12}>
            {eventosSatelite.map((eventoSatelite, idx) => (
              <Link
                key={idx}
                href={eventoSatelite[1]}
                style={{
                  fontFamily: "MavenProRegular",
                  fontSize: 12,
                  color: "#C1272D",
                  textDecorationLine: "underline",
                }}
              >
                {eventoSatelite[0]}
              </Link>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
