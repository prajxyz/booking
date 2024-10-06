export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateRange = (
  start: Date | null,
  end: Date | null
): string => {
  if (!start && !end) return "Select dates";
  if (!start) return "Select departure";
  if (!end) return "Select return";

  const formatDate = (date: Date) => {
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate().toString().padStart(2, "0");
    return `${month} ${day}`;
  };

  const startFormatted = formatDate(start);
  const endFormatted = formatDate(end);

  return `${startFormatted} - ${endFormatted}`;
};
