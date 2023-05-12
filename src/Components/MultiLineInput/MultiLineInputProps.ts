import { TextFieldProps } from '@mui/material';

export interface MultiLineInputProps
  extends Omit<TextFieldProps, 'onChange' | 'value'> {
  [key: string]: any;
  value: string;
  onChange: (val: string) => void;
}
