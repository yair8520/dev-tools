import React from 'react';
import styles from './ResContainer.module.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Text } from '../Text';
import { JsonPanel } from '../JsonPanel';
import { ResContainerProps } from './ResContainerProps';

export const ResContainer = ({ item }: ResContainerProps) => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className={styles.container}>
      <h1>Response</h1>
      {item.res.errorMessage ? (
        <Text sx={{ color: 'red' }}>{item.res.errorMessage}</Text>
      ) : null}
      <div className={styles.properties}>
        <Text>
          Status: {item.res.response?.status}
          {item.res.response?.statusText}{' '}
        </Text>
        <Text>Time: {item.res.time}</Text>
        <Text>Size: {item.res.size}kb</Text>
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
                <Tab label="Body" value="1" />
                <Tab label="Header" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <JsonPanel
                value={JSON.stringify(item.res.response?.data, null, 3)}
              />
            </TabPanel>
            <TabPanel value="2">
              <div className={styles.gridContainer}>
                {item.res.response?.headers
                  ? Object.entries(item.res.response?.headers!).map(
                      ([key, value]) => (
                        <div key={key} className={styles.gridItem}>
                          <Text className={styles.key}>{key}:</Text>
                          <Text className="header-value">{value}</Text>
                        </div>
                      )
                    )
                  : null}
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};
