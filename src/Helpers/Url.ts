import { IParams } from '../Constant/Mock';

export const isUrlValid = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
export function addParamsToURL(
  url: string,
  params: any
) {
  const queryString = Object.keys(params)
    .filter((key) => key !== '' && params[key].key !== '')
    .map(
      (key) =>
        `${encodeURIComponent(params[key].key)}=${encodeURIComponent(
          params[key].value
        )}`
    )
    .join('&');

  const updatedURL = url.includes('?')
    ? `${url}&${queryString}`
    : `${url}?${queryString}`;

  return updatedURL;
}
