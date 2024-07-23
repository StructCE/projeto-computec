import * as Browser from "expo-web-browser";
import { Download } from "@tamagui/lucide-icons";
import { TouchableOpacity } from "react-native";
import { dailySchedules } from "@/constants/dailySchedules";

export const DownloadSchedule = ({ day }: { day: number }) => {
  const handlePress = () => {
    const link = dailySchedules[day.toString()];
    if (!link) return;
    Browser.openBrowserAsync(link).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Download />
    </TouchableOpacity>
  );
};
