import { IJsonSpace } from '../../Constant/Types';

export interface DropDownProps {
  [key: string]: any;
  handleChange: any;
  value: number;
  options: IJsonSpace[];
  title: string;
}
