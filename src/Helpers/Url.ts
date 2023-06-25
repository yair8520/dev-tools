import { IParams } from '../Constant/Mock';

export const isUrlValid = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
export function addParamsToURL(url: string, { key, value }: any) {
  const urlObject = new URL(url);
  urlObject.searchParams.set(key, value);

  return urlObject.toString();
}