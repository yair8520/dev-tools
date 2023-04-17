export interface FormatterProps {
  [key: string]: any;
}
export interface ResState {
  json: boolean;
  res: string;
}
export const ResInitState = {
  json: true,
  res: '',
};
