import { useState } from "react";
import { Button } from "tamagui";
import { Calendar, Clock } from "@tamagui/lucide-icons";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type DateTimePickerProps = {
  newDate: Date;
  setNewDate: React.Dispatch<React.SetStateAction<Date>>;
  newTime: Date;
  setNewTime: React.Dispatch<React.SetStateAction<Date>>;
};

export function DateTimePickerComponent({
  newDate,
  setNewDate,
  newTime,
  setNewTime,
}: DateTimePickerProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onChangeDatePicker = (
    event: DateTimePickerEvent | undefined,
    selectedDate: Date | undefined
  ) => {
    setShowDatePicker(!showDatePicker);
    if (event?.type === "set" && selectedDate) {
      setNewDate(selectedDate);
    }
  };

  const onChangeTimePicker = (
    event: DateTimePickerEvent | undefined,
    selectedTime: Date | undefined
  ) => {
    setShowTimePicker(!showTimePicker);
    if (event?.type === "set" && selectedTime) {
      setNewTime(selectedTime);
    }
  };

  return (
    <>
      <Button
        icon={Calendar}
        size={40}
        backgroundColor="#f8f8f8"
        color="#ED7A17"
        borderWidth={1}
        borderColor="#ededed"
        width={32}
        onPress={() => setShowDatePicker(!showDatePicker)}
      />
      <Button
        icon={Clock}
        size={40}
        backgroundColor="#f8f8f8"
        color="#ED7A17"
        borderWidth={1}
        borderColor="#ededed"
        width={32}
        onPress={() => setShowTimePicker(!showTimePicker)}
      />
      {showDatePicker && (
        <DateTimePicker
          value={newDate}
          mode="date"
          display="default"
          onChange={onChangeDatePicker}
          timeZoneOffsetInMinutes={0}
        />
      )}
      {showTimePicker && (
        <DateTimePicker
          value={newTime}
          mode="time"
          display="default"
          onChange={onChangeTimePicker}
          timeZoneOffsetInMinutes={0}
        />
      )}
    </>
  );
}
