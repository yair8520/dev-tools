import { IScrollTo } from './Types';
import './scrollCss.css'
export const scrollTo = ({
  id,
  behavior = 'smooth',
  block = 'start',
}: IScrollTo) => {
  const element = document.getElementById(id);
  element && element.scrollIntoView({ behavior, block });
  element &&
    element.classList.add('custom-highlighted-class');
  setTimeout(() => {
    element &&
      element.classList.remove('custom-highlighted-class');
  }, 3000);
};
