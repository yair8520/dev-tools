import { IParams } from '../Constant/Mock';

export const isUrlValid = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
};
export function addParamsToURL(url: string, params: IParams) {
  const [baseUrl] = url.split('?');
  console.log(params)
  const queryString = Object.keys(params)
    .filter((key) => key !== '' && params[key].key !== '' && params[key].checked)
    .map(
      (key) =>
        `${encodeURIComponent(params[key].key)}=${encodeURIComponent(
          params[key].value
        )}`
    )
    .join('&');

  const updatedURL = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  return updatedURL;
}
