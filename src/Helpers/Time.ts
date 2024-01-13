import { TShareBinData } from "../Components/ShareEditor/ShareEditorProps";
import { TSharedLinks } from "../Pages/ShareBinPage/ShareBinPageProps";

export const getTime = () => {
  const timestamp = Date.now();
  const date = new Date(timestamp);

  const dateString = date.toLocaleDateString('he-IL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  const timeString = date.toLocaleTimeString('he-IL', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${timeString} ${dateString} `;
};

export const getTimeStamp = () => {
  const timestamp = Date.now();

  return timestamp;
};
export const sortByDate = (a: TShareBinData, b: TShareBinData) => {
  const parseDate = (dateString: string | undefined): Date | null => {
    if (!dateString) return null;

    const [time, dayMonthYear] = dateString.split(' ');
    const [hour, minute] = time.split(':');
    const [day, month, year] = dayMonthYear.split('.');

    // Creating a Date object with the parsed values
    return new Date(`20${year}-${month}-${day}T${hour}:${minute}`);
  };

  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  if (dateA && dateB) {
    return dateB.getTime() - dateA.getTime(); // Swapping dateA and dateB
  } else if (dateA) {
    return -1;
  } else if (dateB) {
    return 1;
  }

  return 0; // Handle cases where date is missing or not valid
};