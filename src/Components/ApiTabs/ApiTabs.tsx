/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useMemo } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { IApiTabs, ITab } from '../../Constant/Mock';
import { TabItem } from '../TabItem';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { Text } from '../Text';
import { v4 as uuidv4 } from 'uuid';
import styles from './ApiTabs.module.css';
import AddIcon from '@mui/icons-material/Add';
import { Collection } from '../Collection';
import { EmptyCollections } from '../EmptyCollections';
import { ProxySection } from '../ProxySection';

export const ApiTabs = () => {
  const {
    tabs,
    addTab,
    collections,
    selectedCollection,
    createCollection,
    tabIndex,
    setTabIndex,
  } = useContext(TabsContext);

  const list = useMemo(() => {
    const filteredTabs: IApiTabs = {};
    Object.keys(tabs).forEach((key) => {
      if (tabs[key].collection === selectedCollection.collection) {
        filteredTabs[key] = tabs[key];
      }
    });

    return Object.entries(filteredTabs);
  }, [selectedCollection, tabs]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };
  const onAddTab = () => {
    const id = uuidv4();
    addTab(id);
  };
  return (
    <div className={styles.container}>
      <Collection list={collections} />
      {collections?.length !== 0 && selectedCollection.id !== '-1' ? (
        <div className={styles.enter}>
          <ProxySection />
          <TabContext value={tabIndex}>
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
                {list.map((t: [string, ITab]) => (
                  <Tab
                    wrapped
                    sx={{ maxWidth: '150px' }}
                    key={t[0]}
                    label={
                      <div className={styles.title}>
                        <Text
                          className={`${styles[t[1].method]} ${styles.icon}`}
                        >
                          {t[1].method}
                        </Text>
                        <Text style={{ overflowWrap: 'anywhere' }}>
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

              {list.map((t: [string, ITab]) => (
                <TabItem key={t[0]} item={t[1]} />
              ))}
            </Box>
          </TabContext>
        </div>
      ) : (
        <EmptyCollections createCollection={createCollection} />
      )}
    </div>
  );
};
