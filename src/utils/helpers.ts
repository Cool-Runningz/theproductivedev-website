export const getFormattedDate = (date: Date) => {
  const newDate = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(newDate);
};