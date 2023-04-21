import { TooltipProps } from '@mui/material';

export interface DescriptionProps extends TooltipProps {
  [key: string]: any;
  title: string;
}
