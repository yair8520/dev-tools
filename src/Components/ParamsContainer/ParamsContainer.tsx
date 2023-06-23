import React from 'react';
import { ParamsContainerProps } from './ParamsContainerProps';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ParamsList } from '../ParamsList';
import styles from './ParamsContainer.module.css';
export const ParamsContainer = ({ data }: ParamsContainerProps) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box className={styles.customBox}>
      <TabContext value={value}>
        <Box>
          <TabList
            className={styles.customTabList}
            allowScrollButtonsMobile={true}
            onChange={handleChange}
          >
            <Tab label="Query Params" value="1" />
            <Tab label="Headers" value="2" />
            <Tab label="Body" value="3" />
          </TabList>

          <TabPanel value="1">
            <ParamsList list={data.queryParams} />
          </TabPanel>
          <TabPanel value="2">
            <ParamsList list={data.headers} />
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};
