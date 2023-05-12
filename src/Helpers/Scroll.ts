import { IScrollTo } from './Types';
import './scrollCss.css';
export const scrollTo = ({
  id,
  behavior = 'smooth',
  block = 'start',
  withHighlight = false,
}: IScrollTo) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior, block });
    if (withHighlight) {
      element.classList.add('custom-highlighted-class');
      setTimeout(() => {
        element && element.classList.remove('custom-highlighted-class');
      }, 3000);
    }
  }
};
