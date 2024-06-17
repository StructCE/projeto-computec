import { db } from "../src/db";

const days = [
  "2024-07-21T12:00:00.000Z",
  "2024-07-22T12:00:00.000Z",
  "2024-07-23T12:00:00.000Z",
  "2024-07-24T12:00:00.000Z",
  "2024-07-25T12:00:00.000Z",
];

const periods = [
  ["08:30:00.000", "10:30:00.000"], // 0
  ["10:30:00.000", "11:00:00.000"], // 1
  ["11:00:00.000", "13:00:00.000"], // 2
  ["13:00:00.000", "14:00:00.000"], // 3
  ["14:00:00.000", "16:00:00.000"], // 4
  ["16:00:00.000", "16:30:00.000"], // 5
  ["16:30:00.000", "18:30:00.000"], // 6
  ["18:30:00.000", "19:00:00.000"], // 7
  ["18:30:00.000", "19:30:00.000"], // 8
  ["19:00:00.000", "20:00:00.000"], // 9
  ["20:00:00.000", "21:30:00.000"], // 10
  ["19:30:00.000", "21:30:00.000"], // 11
];

const events = [
  ["Coffe-Break"],
  ["Almoço"],
  ["CQ", "https://csbc.sbc.org.br/2024/cq/"],
  ["CONSELHO SBC"],
  ["Reunião SRs"],
  ["COMPUTEC"],
  ["WEI", "https://csbc.sbc.org.br/2024/wei/"],
  ["SEMISH", "https://csbc.sbc.org.br/2024/semish/"],
  ["WCAMA", "https://csbc.sbc.org.br/2024/wcama/"],
  ["WCGE", "https://csbc.sbc.org.br/2024/wcge/"],
  ["JAI 1", "https://csbc.sbc.org.br/2024/jai/"],
  ["WPerformance", "https://csbc.sbc.org.br/2024/wperformance/"],
  ["BraSNAM", "https://csbc.sbc.org.br/2024/brasnam2024/"],
  ["CQEB", "https://csbc.sbc.org.br/2024/cqeb/"],
  ["REUNIÃO CEs"],
  ["WIT", "https://csbc.sbc.org.br/2024/wit/"],
  ["EIMP", "https://csbc.sbc.org.br/2024/eimp/"],
  ["WASHES", "https://csbc.sbc.org.br/2024/washes/"],
  ["JAI 2", "https://csbc.sbc.org.br/2024/jai/"],
  ["Fórum PG"],
  ["ETC", "https://csbc.sbc.org.br/2024/etc/"],
  ["JAI 3", "https://csbc.sbc.org.br/2024/jai/"],
  ["WTESTBEDS", "https://csbc.sbc.org.br/2024/wtestbeds/"],
  ["CTD (Mestrado)", "https://csbc.sbc.org.br/2024/ctd/"],
  ["SBCup", "https://csbc.sbc.org.br/2024/sbcup/"],
  ["WICS", "https://csbc.sbc.org.br/2024/wics/"],
  ["JAI 4", "https://csbc.sbc.org.br/2024/jai/"],
  ["ENCompIF", "https://csbc.sbc.org.br/2024/encompif/"],
  ["cblockchain", "https://csbc.sbc.org.br/2024/cblockchain/"],
  ["CAPES e CNPq"],
  ["Reunião do CGI"],
  ["Reunião do PROFISSA"],
  ["CTIC", "https://csbc.sbc.org.br/2024/ctic/"],
  ["CTD (Doutorado)", "https://csbc.sbc.org.br/2024/ctd/"],
  ["WBL", "https://csbc.sbc.org.br/2024/wbl/"],
  ["SECOMU", "https://csbc.sbc.org.br/2024/secomu/"],
  ["Assembleia"],
  ["Jantar"],
  ["Abertura"],
  ["Coquetel"],
  ["Intervalo"],
];

const eventsDayPeriod: [string | undefined, string, string, string][] = [
  ["Flamboyant", "21", "0", "CQ"],
  ["Caliandra", "21", "0", "EIMP"],

  [, "21", "1", "Coffe-Break"],

  ["Flamboyant", "21", "2", "CQ"],
  ["Caliandra", "21", "2", "EIMP"],

  [, "21", "3", "Almoço"],

  ["Flamboyant", "21", "4", "CQ"],
  ["Caliandra", "21", "4", "EIMP"],

  [, "21", "5", "Coffe-Break"],

  ["Flamboyant", "21", "6", "CQ"],
  ["Caliandra", "21", "6", "EIMP"],

  ["Ipê Rosa", "22", "0", "Reunião SRs"],
  ["Ipê Amarelo", "22", "0", "COMPUTEC"],
  ["Ipê Roxo", "22", "0", "WEI"],
  ["Ipê Branco", "22", "0", "SEMISH"],
  ["Caliandra", "22", "0", "WCAMA"],
  ["Flamboyant", "22", "0", "WCGE"],
  ["Cajuzinho", "22", "0", "JAI 1"],
  ["Chuveirinho", "22", "0", "WPerformance"],
  ["Flor de Pequi", "22", "0", "BraSNAM"],
  ["Para-tudo", "22", "0", "CQEB"],

  [, "22", "1", "Coffe-Break"],

  ["Ipê Rosa", "22", "2", "Reunião SRs"],
  ["Ipê Amarelo", "22", "2", "COMPUTEC"],
  ["Ipê Roxo", "22", "2", "WEI"],
  ["Ipê Branco", "22", "2", "SEMISH"],
  ["Caliandra", "22", "2", "WCAMA"],
  ["Flamboyant", "22", "2", "WCGE"],
  ["Cajuzinho", "22", "2", "JAI 1"],
  ["Chuveirinho", "22", "2", "WPerformance"],
  ["Flor de Pequi", "22", "2", "BraSNAM"],
  ["Para-tudo", "22", "2", "CQEB"],

  [, "22", "3", "Almoço"],

  ["Ipê Amarelo", "22", "4", "SECOMU"],

  [, "22", "5", "Coffe-Break"],

  ["Ipê Amarelo", "22", "6", "COMPUTEC"],
  ["Ipê Roxo", "22", "6", "WEI"],
  ["Ipê Branco", "22", "6", "SEMISH"],
  ["Caliandra", "22", "6", "WCAMA"],
  ["Flamboyant", "22", "6", "WCGE"],
  ["Cajuzinho", "22", "6", "cblockchain"],
  ["Chuveirinho", "22", "6", "WPerformance"],
  ["Flor de Pequi", "22", "6", "BraSNAM"],
  ["Para-tudo", "22", "6", "CQEB"],

  [, "22", "7", "Intervalo"],
  [, "22", "9", "Abertura"],
  [, "22", "10", "Coquetel"],

  ["Ipê Rosa", "23", "0", "Reunião CEs"],
  ["Ipê Amarelo", "23", "0", "WIT"],
  ["Ipê Roxo", "23", "0", "WEI"],
  ["Ipê Branco", "23", "0", "SEMISH"],
  ["Caliandra", "23", "0", "EIMP"],
  ["Flamboyant", "23", "0", "WASHES"],
  ["Cajuzinho", "23", "0", "JAI 2"],
  ["Chuveirinho", "23", "0", "WCGE"],
  ["Flor de Pequi", "23", "0", "BraSNAM"],

  [, "23", "1", "Coffe-Break"],

  ["Ipê Rosa", "23", "2", "Reunião CEs"],
  ["Ipê Amarelo", "23", "2", "WIT"],
  ["Ipê Roxo", "23", "2", "WEI"],
  ["Ipê Branco", "23", "2", "SEMISH"],
  ["Caliandra", "23", "2", "EIMP"],
  ["Flamboyant", "23", "2", "WASHES"],
  ["Cajuzinho", "23", "2", "JAI 2"],
  ["Chuveirinho", "23", "2", "WCGE"],
  ["Flor de Pequi", "23", "2", "BraSNAM"],

  [, "23", "3", "Almoço"],

  ["Ipê Amarelo", "23", "4", "SECOMU"],

  [, "23", "5", "Coffe-Break"],

  ["Ipê Rosa", "23", "6", "CAPES e CNPq"],
  ["Ipê Amarelo", "23", "6", "WIT"],
  ["Ipê Roxo", "23", "6", "WEI"],
  ["Ipê Branco", "23", "6", "SEMISH"],
  ["Caliandra", "23", "6", "EIMP"],
  ["Flamboyant", "23", "6", "Reunião do CGI"],
  ["Chuveirinho", "23", "6", "WCGE"],
  ["Flor de Pequi", "23", "6", "BraSNAM"],

  ["Ipê Rosa", "24", "0", "Fórum PG"],
  ["Ipê Amarelo", "24", "0", "WIT"],
  ["Ipê Roxo", "24", "0", "WEI"],
  ["Ipê Branco", "24", "0", "ETC"],
  ["Caliandra", "24", "0", "EIMP"],
  ["Flamboyant", "24", "0", "WASHES"],
  ["Cajuzinho", "24", "0", "JAI 3"],
  ["Chuveirinho", "24", "0", "WTESTBEDS"],
  ["Flor de Pequi", "24", "0", "CTD (Mestrado)"],

  [, "24", "1", "Coffe-Break"],

  ["Ipê Rosa", "24", "2", "Fórum PG"],
  ["Ipê Amarelo", "24", "2", "WIT"],
  ["Ipê Roxo", "24", "2", "WEI"],
  ["Ipê Branco", "24", "2", "ETC"],
  ["Caliandra", "24", "2", "EIMP"],
  ["Flamboyant", "24", "2", "WICS"],
  ["Cajuzinho", "24", "2", "JAI 3"],
  ["Chuveirinho", "24", "2", "WTESTBEDS"],
  ["Flor de Pequi", "24", "2", "CTD (Mestrado)"],

  [, "24", "3", "Almoço"],

  ["Ipê Amarelo", "24", "4", "Assembleia"],

  [, "24", "5", "Coffe-Break"],

  ["Ipê Rosa", "24", "6", "Fórum PG"],
  ["Ipê Amarelo", "24", "6", "WIT"],
  ["Ipê Roxo", "24", "6", "WEI"],
  ["Ipê Branco", "24", "6", "ETC"],
  ["Caliandra", "24", "6", "EIMP"],
  ["Flamboyant", "24", "6", "Reunião do PROFISSA"],
  ["Cajuzinho", "24", "6", "CTIC"],
  ["Chuveirinho", "24", "6", "WTESTBEDS"],
  ["Flor de Pequi", "24", "6", "CTD (Doutorado)"],

  [, "24", "8", "Intervalo"],
  [, "24", "11", "Jantar"],

  ["Ipê Rosa", "25", "0", "SBCup"],
  ["Ipê Amarelo", "25", "0", "WIT"],
  ["Ipê Roxo", "25", "0", "WEI"],
  ["Ipê Branco", "25", "0", "ETC"],
  ["Caliandra", "25", "0", "EIMP"],
  ["Flamboyant", "25", "0", "WICS"],
  ["Cajuzinho", "25", "0", "JAI 4"],
  ["Chuveirinho", "25", "0", "WTESTBEDS"],
  ["Flor de Pequi", "25", "0", "ENCompIF"],

  [, "25", "1", "Coffe-Break"],

  ["Ipê Rosa", "25", "2", "SBCup"],
  ["Ipê Amarelo", "25", "2", "WIT"],
  ["Ipê Roxo", "25", "2", "WEI"],
  ["Ipê Branco", "25", "2", "ETC"],
  ["Caliandra", "25", "2", "EIMP"],
  ["Flamboyant", "25", "2", "WICS"],
  ["Cajuzinho", "25", "2", "JAI 4"],
  ["Chuveirinho", "25", "2", "WTESTBEDS"],
  ["Flor de Pequi", "25", "2", "ENCompIF"],

  [, "25", "3", "SECOMU"],

  ["Ipê Amarelo", "25", "4", "Assembleia"],

  [, "25", "5", "Coffe-Break"],

  ["Ipê Rosa", "25", "2", "SBCup"],
  ["Ipê Amarelo", "25", "2", "WIT"],
  ["Ipê Roxo", "25", "2", "WEI"],
  ["Ipê Branco", "25", "2", "ETC"],
  ["Caliandra", "25", "2", "EIMP"],
  ["Cajuzinho", "25", "2", "WBL"],
  ["Chuveirinho", "25", "2", "WTESTBEDS"],
  ["Flor de Pequi", "25", "2", "ENCompIF"],
];

const posts: [string, string, string, string, string, string[]][] = [
  [
    "Evento hackerman cancelado",
    "Esta programação foi cancelada por problemas técnicos",
    "Descrição do evento hackerman cancelado",
    "2024-06-16T08:00:00.000Z",
    "Ipê Amarelo",
    ["cld-sample-5", "cld-sample-4"],
  ],

  [
    "Criador do linux presente no OS AI",
    "Criador do linux estará presente no evento base, no dia 25/06",
    "Descrição do evento criador do linux presente no OS AI",
    "2024-06-17T08:00:00.000Z",
    "Ipê Rosa",
    ["cld-sample-5", "cld-sample-4"],
  ],

  [
    "Outra notícia de exemplo",
    "Outra notícia de exemplo é o subtítulo de outra notícia de exemplo",
    "Descrição de outra notícia de exemplo",
    "2024-06-18T08:00:00.000Z",
    "Ipê Roxo",
    ["cld-sample-5", "cld-sample-4"],
  ],
];

const createDays = async () => {
  let daysCreated = {};
  const promises = days.map(async (day) => {
    const date = new Date(day);
    const dayCreated = await db.day.create({
      data: {
        date,
      },
    });
    daysCreated[date.getDate()] = dayCreated;
  });
  await Promise.all(promises);
  console.log("Days created:", daysCreated);
  return daysCreated;
};

const createPeriods = async () => {
  let periodsCreated = {};
  const promises = periods.map(async (period, index) => {
    let startTime = new Date("1970-01-01T" + period[0] + "Z");
    let endTime = new Date("1970-01-01T" + period[1] + "Z");
    startTime.setHours(startTime.getHours() + 3);
    endTime.setHours(endTime.getHours() + 3);
    const periodCreated = await db.period.create({
      data: {
        startTime,
        endTime,
      },
    });
    periodsCreated[index] = periodCreated;
  });
  await Promise.all(promises);
  console.log("Periods created:", periodsCreated);
  return periodsCreated;
};

const createEvents = async () => {
  let eventsCreated = {};
  const promises = events.map(async (event) => {
    const eventCreated = await db.event.create({
      data: {
        name: event[0],
        link: event[1],
      },
    });
    eventsCreated[event[0]] = eventCreated;
  });
  await Promise.all(promises);
  console.log("Events created:", eventsCreated);
  return eventsCreated;
};

const createEventsDayPeriod = async (
  days: Record<string, { id: string }>,
  periods: Record<string, { id: string }>,
  events: Record<string, { id: string }>
) => {
  let eventsDayPeriodCreated = {};
  const promises = eventsDayPeriod.map(async (eventDayPeriod, index) => {
    const day = days[eventDayPeriod[1]];
    const period = periods[eventDayPeriod[2]];
    const event = events[eventDayPeriod[3]];
    const local = eventDayPeriod[0];
    if (day && period && event) {
      const data = { day, period, event, local };
      console.log(data);
      const eventDayPeriodCreated = await db.eventDayPeriod.create({
        data: {
          day_id: day.id,
          period_id: period.id,
          event_id: event.id,
          local,
        },
      });
      eventsDayPeriodCreated[index] = eventDayPeriodCreated;
    }
  });
  await Promise.all(promises);
  console.log("Events per period and day created:", eventsDayPeriodCreated);
  return eventsDayPeriodCreated;
};

const createPostsAndNotifications = async () => {
  let postsCreated = {};
  const promises = posts.map(async (post, index) => {
    const dateTime = new Date();
    dateTime.setDate(dateTime.getDate() - index);
    const postCreated = await db.post.create({
      data: {
        title: post[0],
        subtitle: post[1],
        description: post[2],
        dateTime: post[3],
        local: post[4],
        created_at: dateTime,
      },
    });
    const notificationCreated = await db.notification.create({
      data: {
        post_id: postCreated.id,
      },
    });
    const imagesCreated = await Promise.all(
      post[5].map(async (public_id) => {
        return await db.image.create({
          data: {
            public_id: public_id,
            post_id: postCreated.id,
          },
        });
      })
    );
    postsCreated[postCreated.title] = {
      ...postCreated,
      images: imagesCreated,
      notification: notificationCreated,
    };
  });
  await Promise.all(promises);
  console.log(postsCreated);
  return postsCreated;
};

async function seed() {
  const days = await createDays();
  const periods = await createPeriods();
  const events = await createEvents();
  const eventsDayPeriods = await createEventsDayPeriod(days, periods, events);
  const postsCreated = await createPostsAndNotifications();
  console.log("Seeding completed");
}

seed().catch((error) => console.error("Error seeding database:", error));
