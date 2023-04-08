export type IScrollTo = {
  id: MutableRefObject<HTMLDivElement> | HTMLElement | null;
  behavior?: ScrollBehavior | undefined;
  block?: ScrollLogicalPosition | undefined;
};
export type IColoredString = {
  str: string;
  index: number;
  color?: string;
};
