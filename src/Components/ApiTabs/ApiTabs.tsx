import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { ITab } from '../../Constant/Mock';
import { TabItem } from '../TabItem';
import { TabsContext } from '../../Context/ApiContext/ApiContext';

export const ApiTabs = () => {
  const [value, setValue] = React.useState('tab1');
  const { tabs } = useContext(TabsContext);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
            <Tab key={t[0]} label={t[1].title} value={t[1].value} />
          ))}
        </TabList>

        {Object.entries(tabs).map((t: [string, ITab]) => (
          <TabItem key={t[0]} item={t[1]} />
        ))}
      </Box>
    </TabContext>
  );
};
