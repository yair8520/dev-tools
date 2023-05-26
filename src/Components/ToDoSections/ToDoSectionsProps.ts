import { DrawerProps } from '@mui/material';
import { TodoItem } from '../../Pages/ToDoPage/Todo';

export interface ToDoSectionsProps {
  [key: string]: any;
  list: TodoItem[];
  setSelectedDir: Function;
  selectedDir: string;
}

export const drawerProps: DrawerProps = {
  anchor: 'left',
  variant: 'permanent',
  sx: {
    '& .MuiDrawer-paper': {
      position: 'unset',
    },
  },
};
export const mobileDrawerProps: DrawerProps = {
  anchor: 'left',
  variant: 'temporary',
};