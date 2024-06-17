import { db } from "../../../../db";
import { procedure } from "../../../trpc";

const UPPER_FLOOR = ["Ipê Rosa", "Ipê Amarelo", "Ipê Roxo", "Ipê Branco"];
const GROUND_FLOOR = [
  "Caliandra",
  "Flamboyant",
  "Cajuzinho",
  "Chuveirinho",
  "Flor de Pequi",
  "Para-tudo",
];
const GROUND_FLOOR_COLOR = "#52AED5";
const UPPER_FLOOR_COLOR = "#556AD2";
const GENERIC_LOCAL_COLOR = "#B3B3B3";
const WEEK_DAYS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const getLocalColor = (local: string | null): string => {
  if (typeof local === "string") {
    if (UPPER_FLOOR.includes(local)) return UPPER_FLOOR_COLOR;
    if (GROUND_FLOOR.includes(local)) return GROUND_FLOOR_COLOR;
  }
  return GENERIC_LOCAL_COLOR;
};

const formatPeriodString = (startTime: Date, endTime: Date): string => {
  return `${startTime.getHours()}h${String(startTime.getMinutes()).padStart(
    2,
    "0"
  )} - ${endTime.getHours()}h${String(endTime.getMinutes()).padStart(2, "0")}`;
};

const processDayEvents = (
  events: any[]
): {
  period: string;
  events: {
    event: string;
    local: string | null;
    link: string | null;
    color: string;
  }[];
}[] => {
  const sessions: {
    period: string;
    events: {
      event: string;
      local: string | null;
      link: string | null;
      color: string;
    }[];
  }[] = [];
  let indexEvents = -1;
  let lastStartTime: Date | null = null;

  events.forEach((event) => {
    const startTime = new Date(event.period.startTime);
    const endTime = new Date(event.period.endTime);
    const periodString = formatPeriodString(startTime, endTime);

    if (
      lastStartTime === null ||
      startTime.getTime() !== lastStartTime.getTime()
    ) {
      indexEvents++;
      lastStartTime = startTime;
      sessions.push({
        period: periodString,
        events: [],
      });
    }

    sessions[indexEvents].events.push({
      event: event.event.name,
      local: event.local,
      link: event.event.link,
      color: getLocalColor(event.local),
    });
  });

  return sessions;
};

const getUpdatedDays = async (): Promise<
  {
    day: number;
    weekDay: string;
    sessions: {
      period: string;
      events: {
        event: string;
        local: string | null;
        link: string | null;
        color: string;
      }[];
    }[];
  }[]
> => {
  const days = await db.day.findMany({
    orderBy: {
      date: "asc",
    },
    include: {
      events: {
        include: {
          event: true,
          period: true,
        },
        orderBy: {
          period: {
            startTime: "asc",
          },
        },
      },
    },
  });

  return days.map((day) => ({
    day: new Date(day.date).getDate(),
    weekDay: WEEK_DAYS[new Date(day.date).getDay()],
    sessions: processDayEvents(day.events),
  }));
};

export const getEvents = procedure.query(async () => {
  const daysUpdated = await getUpdatedDays();
  return daysUpdated;
});
