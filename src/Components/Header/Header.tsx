import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { CDrawer } from '../CDrawer';
import { useNavigate } from 'react-router-dom';
import { Text } from '../Text';
import styles from './Header.module.css';
import { useSendLogsPerRoute } from '../../Hooks/useSendLogsPerRoute';
import HandymanIcon from '@mui/icons-material/Handyman';
import { usePageTitle } from '../../Hooks/usePageTitle';
import CachedIcon from '@mui/icons-material/Cached';
import { CIconButton } from '../CIconButton';
import { useMediaQuery } from '../../Hooks/useMediaQuery';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WifiIcon from '@mui/icons-material/Wifi';
import { useNetworkStatus } from '../../Hooks/useNetworkStatus';

export const Header = () => {
  const navigate = useNavigate();
  usePageTitle();
  useSendLogsPerRoute();
  const isPWA = useMediaQuery('(display-mode: standalone)');
  const isOnline = useNetworkStatus();
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
          <>
            {isPWA && (
              <div className={styles.reload}>
                <CIconButton
                  title={'Reload'}
                  onClick={() => window.location.reload()}
                >
                  <CachedIcon />
                </CIconButton>
              </div>
            )}
            <div className={styles.reload}>
              {isOnline ? (
                <CIconButton title={'Online'}>
                  <WifiIcon htmlColor="green" />
                </CIconButton>
              ) : (
                <CIconButton title={'offline'}>
                  <WifiOffIcon htmlColor="red" />
                </CIconButton>
              )}
            </div>
          </>
        </div>
        <div className={styles.items}>
          <CDrawer />
        </div>
      </Toolbar>
    </AppBar>
  );
};
