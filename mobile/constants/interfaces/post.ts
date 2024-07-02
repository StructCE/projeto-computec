export type Post = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  created_at: Date;
  images: string[];
  dateTime?: Date | null;
  local?: string | null;
};
