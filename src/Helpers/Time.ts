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
