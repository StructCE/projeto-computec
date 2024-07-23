import {
  ScheduleDayFilter,
  ScheduleEventCard,
  ScheduleLegend,
  DownloadSchedule,
} from "@/src/components/HomeScreen";
import { api } from "@/utils/api";
import { Search } from "@tamagui/lucide-icons";
import {
  AnimatePresence,
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
import { useEffect, useState } from "react";
import { TextInput } from "react-native";

export default function Index() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = debounce(() => setDebouncedSearch(search), 500);
    handler();
    return () => {
      handler.cancel();
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
              Programação da Semana
            </Text>
          }
        >
          <LinearGradient
            colors={["#a92227", "#ed7a17"]}
            start={{ x: 0.5, y: 2 }}
            end={{ x: 0.5, y: -0.5 }}
            locations={[0.4, 1]}
            style={{ flex: 1 }}
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
          shadowOpacity={0.8}
          shadowRadius={4}
          elevation={5}
        >
          <Search
            size="$1"
            padding={12}
            color="rgba(26,26,26,0.8)"
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
              paddingLeft: 10,
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
          <View marginTop="$4">
            <Spinner size="large" color="$orange10" />
          </View>
        ) : hasEvents() ? (
          data
            ?.filter((eventsPerDay) => eventsPerDay.day === day)
            .map((eventsPerDay) => (
              <YStack
                key={`day-${eventsPerDay.day}`}
                margin="$1.5"
                flex={1}
                gap={12}
              >
                {/* NOME DIA DA SEMANA */}
                <View
                  key={`day-header-${eventsPerDay.day}`}
                  alignItems="center"
                  position="relative"
                  marginTop={4}
                >
                  <Text
                    fontSize={24}
                    style={{ fontFamily: "MavenProSemiBold" }}
                  >
                    {`${eventsPerDay.weekDay} - ${eventsPerDay.day} de julho`}
                  </Text>
                  <View position="absolute" right={10}>
                    <DownloadSchedule day={day} />
                  </View>
                </View>

                {/* INFORMAÇÕES VINDAS DO BACKEND */}
                {eventsPerDay.sessions.map((session) => (
                  <YStack
                    key={`session-${eventsPerDay.day}-${session.startTime}-${session.endTime}`}
                    gap={5}
                  >
                    <Text
                      fontSize={18}
                      style={{ fontFamily: "MavenProMedium" }}
                    >
                      {`${session.startTime.getHours()}h${String(
                        session.startTime.getMinutes()
                      ).padStart(
                        2,
                        "0"
                      )} - ${session.endTime.getHours()}h${String(
                        session.endTime.getMinutes()
                      ).padStart(2, "0")}`}
                    </Text>
                    {session.events.map((event) => (
                      <AnimatePresence
                        key={`session-${eventsPerDay.day}-${session.startTime}-${session.endTime}-${event.event}`}
                      >
                        <View
                          animation="bouncy"
                          enterStyle={{
                            opacity: 0,
                            x: -150,
                            scale: 0.8,
                          }}
                          exitStyle={{
                            opacity: 0,
                            x: 100,
                            scale: 0.8,
                          }}
                        >
                          <ScheduleEventCard
                            event={event.event}
                            local={event.local}
                            color={event.color}
                            link={event.link}
                          />
                        </View>
                      </AnimatePresence>
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
