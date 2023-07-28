import React, { useContext } from 'react';
import styles from './ProxySection.module.css';
import IOSSwitch from '../IosSwitch/IosSwitch';
import { FormControlLabel } from '@mui/material';
import { TabsContext } from '../../Context/ApiContext/ApiContext';
import { CIconButton } from '../CIconButton';
import { HelpOutline } from '@material-ui/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';
export const ProxySection = () => {
  const { useProxy, setUseProxy } = useContext(TabsContext);
  return (
    <div className={styles.container}>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{ m: 1 }}
            value={!useProxy}
            onChange={() => setUseProxy(!useProxy)}
          />
        }
        label={`${!useProxy ? 'Activate' : 'Disable'} Proxy Server`}
      />
      <CIconButton
        title={`The ProxySection component is a crucial feature in Postman Clone application. It allows users to enable or disable the NoCORS Proxy Server. When activated, the Proxy Server acts as an intermediary between our front-end and external APIs with CORS restrictions, enabling seamless data access. Toggle the "Activate" or "Disable" button to control the Proxy Server and facilitate smooth API interactions in our application.`}
        onClick={() => {}}
      >
        <HelpOutline />
      </CIconButton>
      <CIconButton title={`See Source Code`} onClick={() => {}}>
        <Link
          className={styles.link}
          target="_blank"
          to={'https://ec2-16-171-200-227.eu-north-1.compute.amazonaws.com'}
        >
          <OpenInNewIcon className={styles.icon} />
        </Link>
      </CIconButton>
    </div>
  );
};
