import React from 'react';
import styles from './ResContainer.module.css';
import { ResContainerProps } from './ResContainerProps';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Text } from '../Text';
export const ResContainer = ({}: ResContainerProps) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <h1>Response</h1>
      <div className={styles.properties}>
        <Text>Status: </Text>
        <Text>Time: </Text>
        <Text>Size: </Text>
      </div>
      <div className={styles.resContainer}>
        <Box
          sx={{
            width: '100%',
            typography: 'body1',
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Header" value="1" />
                <Tab label="Body" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">Body</TabPanel>
            <TabPanel value="2">Header</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};
