export const isUrlValid = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
