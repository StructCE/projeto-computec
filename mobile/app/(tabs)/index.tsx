import ScheduleDayFilter from "@/src/components/HomeScreen/ScheduleDayFilter";
import ScheduleEventCard from "@/src/components/HomeScreen/ScheduleEventCard";
import ScheduleLegend from "@/src/components/HomeScreen/ScheduleLegend";
import MaskedView from "@react-native-masked-view/masked-view";
import { Search } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TextInput, View } from "react-native";
import { ScrollView, YStack } from "tamagui";

export default function Index() {
  return (
    <ScrollView>
      <YStack margin="$4" style={{ flex: 1, gap: 12 }}>
        {/* TITULO */}
        <MaskedView
          maskElement={
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "Maven Pro",
              }}
            >
              PROGRAMAÇÃO DA SEMANA
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

        {/* INPUT - BUSCAR EVENTO */}
        <View
          style={{
            flexDirection: "row",
            height: 44,
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRadius: 5,
            shadowColor: "#1A1A1A",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Search
            size="$1.5"
            padding={12}
            color={"rgba(26,26,26,0.8)"}
            margin={10}
            style={{ alignItems: "center" }}
          />
          <TextInput
            placeholder="Buscar evento"
            placeholderTextColor={"rgba(26,26,26,0.25)"}
            style={{ flex: 1, fontSize: 16, height: 40 }}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* BUTTONS - DIAS DA SEMANA */}
        <ScheduleDayFilter></ScheduleDayFilter>

        {/* LEGENDA */}
        <ScheduleLegend></ScheduleLegend>

        {/* NOME DIA DA SEMANA */}
        <View style={{ alignItems: "center", marginTop: 4 }}>
          <Text style={{ fontWeight: "500", fontSize: 24 }}>
            Segunda - 22 de Julho
          </Text>
        </View>

        {/* PROGRAMAÇÃO */}
        <YStack style={{ gap: 5 }}>
          {/* ToDo: informações vindas do backend */}
          <Text style={{ fontWeight: "600", fontSize: 18 }}>8h30 - 10h30</Text>
          <ScheduleEventCard
            eventName="Reuniões SRs"
            eventLocation="A definir"
            eventBackgroundColor="#52AED5"
          ></ScheduleEventCard>
          <ScheduleEventCard
            eventName="COMPUTEC"
            eventLocation="A definir"
            eventBackgroundColor="#52AED5"
          ></ScheduleEventCard>
          <ScheduleEventCard
            eventName="WEI"
            eventLocation="A definir"
            eventBackgroundColor="#52AED5"
          ></ScheduleEventCard>
          <ScheduleEventCard
            eventName="SEMISH"
            eventLocation="A definir"
            eventBackgroundColor="#52AED5"
          ></ScheduleEventCard>
          <ScheduleEventCard
            eventName="CQEB"
            eventLocation="A definir"
            eventBackgroundColor="#556AD2"
          ></ScheduleEventCard>
          <ScheduleEventCard
            eventName="WCGE"
            eventLocation="A definir"
            eventBackgroundColor="#556AD2"
          ></ScheduleEventCard>
        </YStack>
      </YStack>
    </ScrollView>
  );
}
