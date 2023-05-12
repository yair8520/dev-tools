import { IColoredString } from './Types';

export const coloredString = ({
  str,
  index,
  color = 'red',
}: IColoredString) => {
  const char = str.slice(index, index + 1);
  return `${str.slice(0, index)}<mark>${char}</mark>${str.slice(index + 1)}`;
};
