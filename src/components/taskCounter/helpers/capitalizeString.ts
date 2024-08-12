const capitalizeString = (text: string): string => {
  if (!text) return "";
  return text[0].toUpperCase() + text.slice(1);
};

const capitalizeStringAndSplit = (text: string): string => {
  if (!text) return "";
  return (text[0].toUpperCase() + text.slice(1)).split(/(?<![A-Z])(?=[A-Z])/).join(" ");
}

export { capitalizeString, capitalizeStringAndSplit }
