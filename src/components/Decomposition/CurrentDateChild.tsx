import React from "react";
import CurrentDateProps from "./interfaces/InterfaceCurrentDate";

/**
 * Render the current date and time in a specific format
 * @param {CurrentDateProps} props - The props object.
 * @param {Date} props.date - The date for rendering.
 * @returns {JSX.Element} A CurrentDateChild component
 */
export const CurrentDateChild: React.FC<CurrentDateProps> = ({ date }: CurrentDateProps): JSX.Element => {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };

    const formattedDate = date.toLocaleString("ru-RU", options);
    const [weekday, dayMonth] = formattedDate.split(", ");
    const [day, month] = dayMonth.split(" ");
    const time = date.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });

    return `${day} ${month}, ${weekday} ${time.padStart(5, "0")}`;
  };

  return <div className="yandex__current-date">{formatDate(date)}</div>;
};
