import React, { useContext, useState } from 'react';
import styles from './DirItem.module.css';
import { DirItemProps } from './DirItemProps';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  useTheme,
} from '@mui/material';
import { DirItemButtons } from './DirItemButtons';
import { TodoContext } from '../../../Context/TodoContext/TodoContext';

export const DirItem = ({
  title,
  onItemClick,
  selectedDir,
  Icon,
}: DirItemProps) => {
  const theme = useTheme();
  const { editDir } = useContext(TodoContext);
  const [edit, setEdit] = useState(false);
  const [modText, setModText] = useState(title);
  const saveEdit = () => {
    setEdit(!edit);
    editDir(modText,title);
  };
  return (
    <ListItem
      secondaryAction={
        !Icon ? (
          <DirItemButtons
            setEdit={setEdit}
            saveEdit={saveEdit}
            edit={edit}
            dir={title}
          />
        ) : null
      }
      key={title}
      disablePadding
    >
      <ListItemButton selected={selectedDir} onClick={() => onItemClick(title)}>
        {Icon ? (
          <>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </>
        ) : (
          <TextField
            sx={{
              width: '100%',
              '& .MuiInputBase-input.Mui-disabled': {
                opacity: 1,
                WebkitTextFillColor:
                  theme.palette.mode === 'dark' ? 'white' : 'rgba(0, 0, 0, 1)',
                border: 'none',
              },
              '& .MuiInputBase-root.Mui-disabled': {
                border: 'none',
                outline: 'none',
              },
              input: { textAlign: 'center' },
            }}
            InputProps={{
              disableUnderline: !edit,
            }}
            variant="standard"
            disabled={!edit}
            onBlur={saveEdit}
            onChange={(e) => setModText(e.target.value)}
            value={modText}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};
