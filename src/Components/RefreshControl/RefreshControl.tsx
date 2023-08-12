import React, { useRef } from 'react';
import styles from './RefreshControl.module.css';
import { RefreshControlProps } from './RefreshControlProps';
import { usePullToRefresh } from '../../Hooks/usePullToRefresh';
import { CircularProgress } from '@mui/material';

export const PullToRefreshWrapper = ({
  onRefresh,
  children,
}: RefreshControlProps) => {
  const divRef = useRef(null);
  const isRefreshing = usePullToRefresh(divRef, onRefresh);

  return (
    <div className={styles.refreshWrapper}>
      <div ref={divRef} className={styles.container}>
        <div
          className={`${styles.refreshIndicator} ${
            isRefreshing ? styles.showLoader : ''
          }`}
        >
          <CircularProgress />
        </div>
        {children}
      </div>
    </div>
  );
};
