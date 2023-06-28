import React, { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ITab } from '../../Constant/Mock';
import { TabItem } from '../TabItem';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { Text } from '../Text';
import { v4 as uuidv4 } from 'uuid';
import styles from './ApiTabs.module.css';
import AddIcon from '@mui/icons-material/Add';

export const ApiTabs = () => {
  const [value, setValue] = React.useState('1');
  const { tabs, addTab } = useContext(TabsContext);
  const tabsKeys = Object.keys(tabs);
  useEffect(() => {
    setValue(tabsKeys[tabsKeys.length - 1]);
  }, [tabsKeys.length]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const onAddTab = () => {
    const id = uuidv4();
    addTab(id);
  };
  return (
    <TabContext value={value}>
      <Box
        sx={{
          marginTop: '25px',
          border: 2,
          borderColor: 'divider',
          width: '90vw',
        }}
      >
        <TabList
          sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}
          onChange={handleChange}
          scrollButtons={true}
          variant="scrollable"
          allowScrollButtonsMobile={true}
        >
          {Object.entries(tabs).map((t: [string, ITab]) => (
            <Tab
              wrapped
              sx={{ maxWidth: '150px' }}
              key={t[0]}
              label={
                <div className={styles.title}>
                  <Text className={`${styles[t[1].method]} ${styles.icon}`}>
                    {t[1].method}
                  </Text>
                  <Text numberOfLines={1} textOverflow="clip">
                    {t[1].title}
                  </Text>
                </div>
              }
              value={t[1].value}
            />
          ))}
          <div className={styles.addIcon} onClick={onAddTab}>
            <AddIcon />
          </div>
        </TabList>

        {Object.entries(tabs).map((t: [string, ITab]) => (
          <TabItem key={t[0]} item={t[1]} />
        ))}
      </Box>
    </TabContext>
  );
};
