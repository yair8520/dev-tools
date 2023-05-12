export type IJsonSpace = {
  label: string;
  value: number;
};
export type ICheckBox = {
  id: number;
  label: string;
  state: boolean;
};
export type IFlexOptions = {
  type: string;
  options?: any;
  range?: boolean;
};
export const alignSelfs = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch',
  'auto',
] as const;
export const flexDirections = [
  'row',
  'column',
  'row-reverse',
  'column-reverse',
] as const;
export const flexWraps = ['nowrap', 'wrap', 'wrap-reverse'] as const;
export const justifyContentValues = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
] as const;
export const alignItemsValues = [
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
] as const;
export const alignContentValues = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'stretch',
] as const;
export const flexBasis = [
  'auto',
  'content',
  'fit-content',
  'max-content',
  'min-content',
  'none',
  'initial',
  'inherit',
] as const;
