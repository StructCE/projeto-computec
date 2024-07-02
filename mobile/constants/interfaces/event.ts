export type Event = {
  event: string;
  local: string | null;
  link: string | null;
  color: string;
};

export type EventsPerDay = {
  day: number;
  weekDay: string;
  sessions: {
    period: string;
    events: Event[];
  }[];
};
