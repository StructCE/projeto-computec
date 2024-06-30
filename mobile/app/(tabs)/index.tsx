import {
  ScheduleDayFilter,
  ScheduleEventCard,
  ScheduleLegend,
} from "@/src/components/HomeScreen";
import { api } from "@/utils/api";
import { Search } from "@tamagui/lucide-icons";
import {
  ScrollView,
  YStack,
  XStack,
  Text,
  View,
  debounce,
  Spinner,
} from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useState, useEffect } from "react";
import { TextInput } from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = debounce(() => setDebouncedSearch(search), 500);
    handler();
    return () => {
      handler.cancel();
      console.log(search);
    };
  }, [search]);

  const today = new Date();
  const firstDate =
    today.getDate() > 21 && today.getDate() < 25 ? today.getDate() : 21;
  const [day, setDay] = useState(firstDate);

  const { data, isLoading, isFetched } = api.event.getEvents.useQuery({
    search: debouncedSearch,
  });

  const hasEvents = () => {
    return data?.some(
      (eventsPerDay) =>
        eventsPerDay.day === day && eventsPerDay.sessions.length > 0
    );
  };

  return (
    <ScrollView>
      <YStack margin="$4" flex={1} gap={12}>
        {/* TITULO */}
        <MaskedView
          maskElement={
            <Text
              fontSize={24}
              style={{
                fontFamily: "MavenProBold",
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
        <XStack
          height={44}
          alignItems="center"
          backgroundColor="#FFF"
          borderRadius={5}
          shadowColor="#1A1A1A"
          shadowOffset={{ width: 0, height: 0 }}
          shadowOpacity={0.3}
          shadowRadius={4}
          elevation={5}
        >
          <Search
            size="$1.5"
            padding={12}
            color="rgba(26,26,26,0.8)"
            margin={10}
            alignItems="center"
          />
          <TextInput
            placeholder="Buscar por evento ou sala"
            placeholderTextColor="#000000"
            cursorColor="#000000"
            onChangeText={(text) => setSearch(text)}
            style={{
              flex: 1,
              fontSize: 16,
              height: 40,
              fontFamily: "MavenProRegular",
            }}
            underlineColorAndroid="transparent"
          />
        </XStack>

        {/* BUTTONS - DIAS DA SEMANA */}
        <ScheduleDayFilter state={day} setState={setDay} />

        {/* LEGENDA */}
        <ScheduleLegend />

        {/* FILTRO DE EVENTOS */}
        {isLoading ? (
          <View>
            <Spinner size="large" color="$orange10" />
          </View>
        ) : hasEvents() ? (
          data
            ?.filter((eventsPerDay) => eventsPerDay.day === day)
            .map((eventsPerDay) => (
              <YStack
                key={`day-${eventsPerDay.day}`}
                margin="$4"
                flex={1}
                gap={12}
              >
                {/* NOME DIA DA SEMANA */}
                <View
                  key={`day-header-${eventsPerDay.day}`}
                  alignItems="center"
                  marginTop={4}
                >
                  <Text
                    fontWeight="500"
                    fontSize={24}
                    style={{ fontFamily: "MavenProSemiBold" }}
                  >
                    {`${eventsPerDay.weekDay} - ${eventsPerDay.day} de julho`}
                  </Text>
                </View>

                {/* INFORMAÇÕES VINDAS DO BACKEND */}
                {eventsPerDay.sessions.map((session) => (
                  <YStack
                    key={`session-${eventsPerDay.day}-${session.period}`}
                    gap={5}
                  >
                    <Text
                      fontWeight="600"
                      fontSize={18}
                      style={{ fontFamily: "MavenProMedium" }}
                    >
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
            ))
        ) : (
          isFetched && (
            <Text
              fontSize={18}
              style={{
                fontFamily: "MavenProRegular",
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Nenhum evento encontrado para a busca "{debouncedSearch}"
            </Text>
          )
        )}
      </YStack>
    </ScrollView>
  );
}
