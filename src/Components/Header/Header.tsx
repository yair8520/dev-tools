import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { CDrawer } from '../CDrawer';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Text';
import styles from './Header.module.css';
import { useSendLogsPerRoute } from '../../Hooks/useSendLogsPerRoute';

export const Header = ({ numOfUsers }: any) => {
  const navigate = useNavigate();
  useSendLogsPerRoute();
  return (
    <AppBar style={{ height: '60px' }} position="static">
      <Toolbar>
        <div
          onDoubleClick={() => alert(numOfUsers)}
          className={styles.siteTitle}
        >
          <Text
            onClick={() => navigate('/')}
            variant="h6"
            component="div"
            sx={{
              width: '150px',
              '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
          >
            Dev-Tools
          </Text>
        </div>
        <div className={styles.items}>
          <CDrawer />
        </div>
      </Toolbar>
    </AppBar>
  );
};
