export interface MultiLineInputProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'onChange' | 'value'> {
  [key: string]: any;
  value: string;
  onChange: (val: string) => void;
}
