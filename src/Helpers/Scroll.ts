import { IScrollTo } from './Types';

export const scrollTo = ({
  id,
  behavior = 'smooth',
  block = 'start',
}: IScrollTo) => {
  console.log({ id });
  id && id.scrollIntoView({ behavior, block });
};
