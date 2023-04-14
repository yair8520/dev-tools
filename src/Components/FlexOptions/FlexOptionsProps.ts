import { SetStateAction } from 'react';
import { IContainerStyle } from '../../Pages/FlexPage/FlexPageProps';

export interface FlexOptionsProps {
  [key: string]: any;
  containerStyle: IContainerStyle | undefined;
  setContainerStyle: (s: any) => void;
}
