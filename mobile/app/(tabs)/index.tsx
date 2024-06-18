import ScheduleDayFilter from "@/src/components/HomeScreen/ScheduleDayFilter";
import ScheduleEventCard from "@/src/components/HomeScreen/ScheduleEventCard";
import ScheduleLegend from "@/src/components/HomeScreen/ScheduleLegend";
import { api } from "@/utils/api";
import MaskedView from "@react-native-masked-view/masked-view";
import { Search } from "@tamagui/lucide-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { ScrollView, YStack } from "tamagui";

export default function Index() {
  const events = api.event.getEvents.useQuery();
  const today = new Date();
  const firstDate =
    today.getDate() > 21 && today.getDate() < 25 ? today.getDate() : 21;
  const [day, setDay] = useState(firstDate);

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
        <ScheduleDayFilter state={day} setState={setDay}></ScheduleDayFilter>

        {/* LEGENDA */}
        <ScheduleLegend></ScheduleLegend>

        {/* FILTRO DE EVENTOS */}
        {events.data
          ?.filter((eventsPerDay) => eventsPerDay.day === day)
          .map((eventsPerDay) => (
            <YStack
              key={`day-${eventsPerDay.day}`}
              margin="$4"
              style={{ flex: 1, gap: 12 }}
            >
              {/* NOME DIA DA SEMANA */}
              <View
                key={`day-header-${eventsPerDay.day}`}
                style={{ alignItems: "center", marginTop: 4 }}
              >
                <Text style={{ fontWeight: "500", fontSize: 24 }}>
                  {`${eventsPerDay.weekDay} - ${eventsPerDay.day} de julho`}
                </Text>
              </View>

              {/* INFORMAÇÕES VINDAS DO BACKEND */}
              {eventsPerDay.sessions.map((session) => (
                <YStack
                  key={`session-${eventsPerDay.day}-${session.period}`}
                  style={{ gap: 5 }}
                >
                  <Text style={{ fontWeight: "600", fontSize: 18 }}>
                    {session.period}
                  </Text>
                  {session.events.map((event) => (
                    <ScheduleEventCard
                      key={`event-${eventsPerDay.day}-${session.period}-${event.event}`}
                      eventName={event.event}
                      eventLocation={event.local}
                      eventBackgroundColor={event.color}
                      eventLink={event.link}
                    />
                  ))}
                </YStack>
              ))}
            </YStack>
          ))}
      </YStack>
    </ScrollView>
  );
}
