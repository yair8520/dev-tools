import React, { useContext } from 'react';
import { ParamsContainerProps } from './ParamsContainerProps';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ParamsList } from '../ParamsList';
import styles from './ParamsContainer.module.css';
import { JsonPanel } from '../JsonPanel';
import { TabsContext } from '../../Context/ApiContext/ApiContext';

export const ParamsContainer = ({ data, id }: ParamsContainerProps) => {
  const [value, setValue] = React.useState('1');
  const { updateBody } = useContext(TabsContext);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box
      className={styles.customBox}
      sx={{ border: 1, borderColor: 'divider' }}
    >
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
            <ParamsList
              type={'queryParams'}
              tabId={id}
              list={data.queryParams}
            />
          </TabPanel>
          <TabPanel value="2">
            <ParamsList type={'headers'} tabId={id} list={data.headers} />
          </TabPanel>
          <TabPanel value="3">
            <JsonPanel
              onChange={(value: string) => {
                console.log(value)
                updateBody({ tabId: id, type: 'body', value });
              }}
              value={data.body}
            />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};
