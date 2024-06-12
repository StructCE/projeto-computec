import { db } from "../src/db";

const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
]

const periods = [
    ["08:30", "10:30"], // 0
    ["10:30", "11:00"], // 1
    ["11:00", "13:00"], // 2
    ["13:00", "14:00"], // 3
    ["14:00", "16:00"], // 4
    ["16:00", "16:30"], // 5
    ["16:30", "18:30"], // 6
    ["18:30", "19:00"], // 7
    ["18:30", "19:30"], // 8
    ["19:00", "20:00"], // 9
    ["20:00", "21:30"], // 10
    ["19:30", "21:30"], // 11
]

const events = [
    ["Coffe-Break", "LARANJA"],
    ["Almoço", "LARANJA"],
    ["CQ", "AZUL", "https://csbc.sbc.org.br/2024/cq/"],
    ["CONSELHO SBC", "AMARELO"],
    ["Reunião SRs", "AMARELO"],
    ["COMPUTEC", "AZUL"],
    ["WEI", "AZUL", "https://csbc.sbc.org.br/2024/wei/"],
    ["SEMISH", "AZUL", "https://csbc.sbc.org.br/2024/semish/"],
    ["WCAMA", "VERDE", "https://csbc.sbc.org.br/2024/wcama/"],
    ["WCGE", "VERDE", "https://csbc.sbc.org.br/2024/wcge/"],
    ["JAI 1", "AZUL", "https://csbc.sbc.org.br/2024/jai/"],
    ["WPerformance", "VERDE", "https://csbc.sbc.org.br/2024/wperformance/"],
    ["BraSNAM", "VERDE", "https://csbc.sbc.org.br/2024/brasnam2024/"],
    ["CQEB", "AZUL", "https://csbc.sbc.org.br/2024/cqeb/"],
    ["REUNIÃO CEs", "AMARELO"],
    ["WIT", "AZUL", "https://csbc.sbc.org.br/2024/wit/"],
    ["EIMP", "VERDE", "https://csbc.sbc.org.br/2024/eimp/"],
    ["WASHES", "VERDE", "https://csbc.sbc.org.br/2024/washes/"],
    ["JAI 2", "AZUL", "https://csbc.sbc.org.br/2024/jai/"],
    ["Fórum PG", "AMARELO"],
    ["ETC", "VERDE", "https://csbc.sbc.org.br/2024/etc/"],
    ["JAI 3", "AZUL", "https://csbc.sbc.org.br/2024/jai/"],
    ["WTESTBEDS", "VERDE", "https://csbc.sbc.org.br/2024/wtestbeds/"],
    ["CTD (Mestrado)", "AZUL", "https://csbc.sbc.org.br/2024/ctd/"],
    ["SBCup", "VERDE", "https://csbc.sbc.org.br/2024/sbcup/"],
    ["WICS", "VERDE", "https://csbc.sbc.org.br/2024/wics/"],
    ["JAI 4", "AZUL", "https://csbc.sbc.org.br/2024/jai/"],
    ["ENCompIF", "VERDE", "https://csbc.sbc.org.br/2024/encompif/"],
    ["cblockchain", "VERDE", "https://csbc.sbc.org.br/2024/cblockchain/"],
    ["CAPES e CNPq", "AMARELO"],
    ["Reunião do CGI", "AMARELO"],
    ["Reunião do PROFISSA", "AMARELO"],
    ["CTIC", "AZUL", "https://csbc.sbc.org.br/2024/ctic/"],
    ["CTD (Doutorado)", "AZUL", "https://csbc.sbc.org.br/2024/ctd/"],
    ["WBL", "VERDE", "https://csbc.sbc.org.br/2024/wbl/"],
    ["SECOMU", "AZUL", "https://csbc.sbc.org.br/2024/secomu/"],
    ["Assembleia", "AZUL"],
    ["Jantar", "LARANJA"],
    ["Abertura", "LARANJA"],
    ["Coquetel", "LARANJA"],
    ["Intervalo", "CINZA"]
]

const eventsDayPeriod = [
    ["Ipê Rosa", "Segunda", "0","Reunião SRs"],
    ["Ipê Amarelo", "Segunda", "0","COMPUTEC"],
    ["Ipê Roxo", "Segunda", "0","WEI"],
    ["Ipê Branco", "Segunda", "0","SEMISH"],
    ["Caliandra", "Segunda", "0","WCAMA"],
    ["Flamboyant", "Segunda", "0","WCGE"],
    ["Cajuzinho", "Segunda", "0","JAI 1"],
    ["Chuveirinho", "Segunda", "0","WPerformance"],
    ["Flor de Pequi", "Segunda", "0","BraSNAM"],
    ["Para-tudo", "Segunda", "0","CQEB"],
    
    [ , "Segunda", "1","Coffe-Break"],
    
    ["Ipê Rosa", "Segunda", "2","Reunião SRs"],
    ["Ipê Amarelo", "Segunda", "2","COMPUTEC"],
    ["Ipê Roxo", "Segunda", "2","WEI"],
    ["Ipê Branco", "Segunda", "2","SEMISH"],
    ["Caliandra", "Segunda", "2","WCAMA"],
    ["Flamboyant", "Segunda", "2","WCGE"],
    ["Cajuzinho", "Segunda", "2","JAI 1"],
    ["Chuveirinho", "Segunda", "2","WPerformance"],
    ["Flor de Pequi", "Segunda", "2","BraSNAM"],
    ["Para-tudo", "Segunda", "2","CQEB"],
    
    [ , "Segunda", "3","Almoço"],
    
    ["Ipê Amarelo", "Segunda", "4","SECOMU"],
    
    [ , "Segunda", "5","Coffe-Break"],
    
    ["Ipê Amarelo", "Segunda", "6","COMPUTEC"],
    ["Ipê Roxo", "Segunda", "6","WEI"],
    ["Ipê Branco", "Segunda", "6","SEMISH"],
    ["Caliandra", "Segunda", "6","WCAMA"],
    ["Flamboyant", "Segunda", "6","WCGE"],
    ["Cajuzinho", "Segunda", "6","cblockchain"],
    ["Chuveirinho", "Segunda", "6","WPerformance"],
    ["Flor de Pequi", "Segunda", "6","BraSNAM"],
    ["Para-tudo", "Segunda", "6","CQEB"],
    
    [ , "Segunda", "7","Intervalo"],
    [ , "Segunda", "9","Abertura"],
    [ , "Segunda", "10","Coquetel"],

    ["Ipê Rosa", "Terça", "0","Reunião CEs"],
    ["Ipê Amarelo", "Terça", "0","WIT"],
    ["Ipê Roxo", "Terça", "0","WEI"],
    ["Ipê Branco", "Terça", "0","SEMISH"],
    ["Caliandra", "Terça", "0","EIMP"],
    ["Flamboyant", "Terça", "0","WASHES"],
    ["Cajuzinho", "Terça", "0","JAI 2"],
    ["Chuveirinho", "Terça", "0","WCGE"],
    ["Flor de Pequi", "Terça", "0","BraSNAM"],
    
    [ , "Terça", "1","Coffe-Break"],
    
    ["Ipê Rosa", "Terça", "2","Reunião CEs"],
    ["Ipê Amarelo", "Terça", "2","WIT"],
    ["Ipê Roxo", "Terça", "2","WEI"],
    ["Ipê Branco", "Terça", "2","SEMISH"],
    ["Caliandra", "Terça", "2","EIMP"],
    ["Flamboyant", "Terça", "2","WASHES"],
    ["Cajuzinho", "Terça", "2","JAI 2"],
    ["Chuveirinho", "Terça", "2","WCGE"],
    ["Flor de Pequi", "Terça", "2","BraSNAM"],
    
    [ , "Terça", "3","Almoço"],
    
    ["Ipê Amarelo", "Terça", "4","SECOMU"],
    
    [ , "Terça", "5","Coffe-Break"],
    
    ["Ipê Rosa", "Terça", "6","CAPES e CNPq"],
    ["Ipê Amarelo", "Terça", "6","WIT"],
    ["Ipê Roxo", "Terça", "6","WEI"],
    ["Ipê Branco", "Terça", "6","SEMISH"],
    ["Caliandra", "Terça", "6","EIMP"],
    ["Flamboyant", "Terça", "6","Reunião do CGI"],
    ["Chuveirinho", "Terça", "6","WCGE"],
    ["Flor de Pequi", "Terça", "6","BraSNAM"],

    ["Ipê Rosa", "Quarta", "0","Fórum PG"],
    ["Ipê Amarelo", "Quarta", "0","WIT"],
    ["Ipê Roxo", "Quarta", "0","WEI"],
    ["Ipê Branco", "Quarta", "0","ETC"],
    ["Caliandra", "Quarta", "0","EIMP"],
    ["Flamboyant", "Quarta", "0","WASHES"],
    ["Cajuzinho", "Quarta", "0","JAI 3"],
    ["Chuveirinho", "Quarta", "0","WTESTBEDS"],
    ["Flor de Pequi", "Quarta", "0","CTD (Mestrado)"],
    
    [ , "Quarta", "1","Coffe-Break"],
    
    ["Ipê Rosa", "Quarta", "2","Fórum PG"],
    ["Ipê Amarelo", "Quarta", "2","WIT"],
    ["Ipê Roxo", "Quarta", "2","WEI"],
    ["Ipê Branco", "Quarta", "2","ETC"],
    ["Caliandra", "Quarta", "2","EIMP"],
    ["Flamboyant", "Quarta", "2","WICS"],
    ["Cajuzinho", "Quarta", "2","JAI 3"],
    ["Chuveirinho", "Quarta", "2","WTESTBEDS"],
    ["Flor de Pequi", "Quarta", "2","CTD (Mestrado)"],
    
    [ , "Quarta", "3","Almoço"],
    
    ["Ipê Amarelo", "Quarta", "4","Assembleia"],
    
    [ , "Quarta", "5","Coffe-Break"],
    
    ["Ipê Rosa", "Quarta", "6","Fórum PG"],
    ["Ipê Amarelo", "Quarta", "6","WIT"],
    ["Ipê Roxo", "Quarta", "6","WEI"],
    ["Ipê Branco", "Quarta", "6","ETC"],
    ["Caliandra", "Quarta", "6","EIMP"],
    ["Flamboyant", "Quarta", "6","Reunião do PROFISSA"],
    ["Cajuzinho", "Quarta", "6","CTIC"],
    ["Chuveirinho", "Quarta", "6","WTESTBEDS"],
    ["Flor de Pequi", "Quarta", "6","CTD (Doutorado)"],

    [, "Quarta", "8", "Intervalo"],
    [, "Quarta", "11", "Jantar"],

    ["Ipê Rosa", "Quinta", "0","SBCup"],
    ["Ipê Amarelo", "Quinta", "0","WIT"],
    ["Ipê Roxo", "Quinta", "0","WEI"],
    ["Ipê Branco", "Quinta", "0","ETC"],
    ["Caliandra", "Quinta", "0","EIMP"],
    ["Flamboyant", "Quinta", "0","WICS"],
    ["Cajuzinho", "Quinta", "0","JAI 4"],
    ["Chuveirinho", "Quinta", "0","WTESTBEDS"],
    ["Flor de Pequi", "Quinta", "0","ENCompIF"],
    
    [ , "Quinta", "1","Coffe-Break"],
    
    ["Ipê Rosa", "Quinta", "2","SBCup"],
    ["Ipê Amarelo", "Quinta", "2","WIT"],
    ["Ipê Roxo", "Quinta", "2","WEI"],
    ["Ipê Branco", "Quinta", "2","ETC"],
    ["Caliandra", "Quinta", "2","EIMP"],
    ["Flamboyant", "Quinta", "2","WICS"],
    ["Cajuzinho", "Quinta", "2","JAI 4"],
    ["Chuveirinho", "Quinta", "2","WTESTBEDS"],
    ["Flor de Pequi", "Quinta", "2","ENCompIF"],
    
    [ , "Quinta", "3","SECOMU"],
    
    ["Ipê Amarelo", "Quinta", "4","Assembleia"],
    
    [ , "Quinta", "5","Coffe-Break"],
    
    ["Ipê Rosa", "Quinta", "2","SBCup"],
    ["Ipê Amarelo", "Quinta", "2","WIT"],
    ["Ipê Roxo", "Quinta", "2","WEI"],
    ["Ipê Branco", "Quinta", "2","ETC"],
    ["Caliandra", "Quinta", "2","EIMP"],
    ["Cajuzinho", "Quinta", "2","WBL"],
    ["Chuveirinho", "Quinta", "2","WTESTBEDS"],
    ["Flor de Pequi", "Quinta", "2","ENCompIF"],

]

const createDays = async () => {
    let daysCreated = {};
    const promises = days.map(async (day) => {
        const dayCreated = await db.day.create({
            data: {
                date: day
            }
        });
        daysCreated[day] = dayCreated;
    });
    await Promise.all(promises);
    console.log("Days created:", daysCreated);
    return daysCreated;
};

const createPeriods = async () => {
    let periodsCreated = {};
    const promises = periods.map(async (period, index) => {
        const periodCreated = await db.period.create({
            data: {
                startTime: period[0],
                endTime: period[1]
            }
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
                color: event[1],
                link: event[2]
            }
        });
        eventsCreated[event[0]] = eventCreated;
    });
    await Promise.all(promises);
    console.log("Events created:", eventsCreated);
    return eventsCreated;
};

async function seed() {
    const days = await createDays();
    const periods = await createPeriods();
    const events = await createEvents();
    console.log("Seeding completed");
    console.log("Days:", days);
    console.log("Periods:", periods);
    console.log("Events:", events);
}

seed().catch(error => console.error("Error seeding database:", error));