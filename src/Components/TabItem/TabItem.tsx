import React, { useContext, useState } from 'react';
import styles from './TabItem.module.css';
import { TabItemProps } from './TabItemProps';
import TabPanel from '@mui/lab/TabPanel/TabPanel';
import { ReqContainer } from '../ReqContainer';
import { ResContainer } from '../ResContainer';
import { Text } from '../Text';
import EditIcon from '@mui/icons-material/Edit';
import { CIconButton } from '../CIconButton';
import { Button, TextField, useTheme } from '@mui/material';
import HttpIcon from '@mui/icons-material/Http';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import SaveIcon from '@mui/icons-material/Save';
export const TabItem = ({ item, ...rest }: TabItemProps) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(item.title);
  const theme = useTheme();
  const { editTabTitle } = useContext(TabsContext);

  return (
    <TabPanel className={styles.container} value={item.value}>
      <Button endIcon={<SaveIcon />} variant="outlined">
        save
      </Button>
      <div className={styles.sectionDetailed}>
        <HttpIcon htmlColor="#1976d2" />
        <Text variant="subtitle2">{`${item.collection} / `}</Text>
        <div>
          <TextField
            variant="standard"
            value={text}
            sx={{
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
              width: text.length > 0 ? `calc(${text.length * 9}px )` : '100%',
              maxWidth: '50vw',
            }}
            InputProps={{
              disableUnderline: !edit,
              style: { textAlign: 'center' },
            }}
            disabled={!edit}
            onBlur={(e) => {
              editTabTitle({ id: item.id, newTitle: e.target.value });
              setEdit(!edit);
            }}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <CIconButton onClick={() => setEdit(!edit)}>
          <EditIcon />
        </CIconButton>
      </div>
      <ReqContainer item={item} />
      <ResContainer item={item} />
    </TabPanel>
  );
};
