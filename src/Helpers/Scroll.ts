import { IScrollTo } from './Types';

export const scrollTo = ({
  id,
  behavior = 'smooth',
  block = 'start',
}: IScrollTo) => {
  const element = document.getElementById(id);
  element && element.scrollIntoView({ behavior, block });
};
