import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { CDrawer } from '../CDrawer';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Text';
import styles from './Header.module.css';
import { useSendLogsPerRoute } from '../../Hooks/useSendLogsPerRoute';
import HandymanIcon from '@mui/icons-material/Handyman';
export const Header = () => {
  const navigate = useNavigate();
  useSendLogsPerRoute();
  return (
    <AppBar style={{ height: '60px' }} position="static">
      <Toolbar>
        <div className={styles.siteTitle}>
          <Text
            onClick={() => navigate('/')}
            variant="h6"
            sx={{
              '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
              },
            }}
            className={`${styles.title}`}
          >
            <HandymanIcon />
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
