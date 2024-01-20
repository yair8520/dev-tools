import React from 'react';
import styles from './About.module.css';
import { handleShareButton, mailtoHref, socialLinks } from './helpers';
import { CIconButton } from '../CIconButton';
import { Link } from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';
import ShareIcon from '@mui/icons-material/Share';
import { Paper } from '@mui/material';

export const About = () => {
  return (
    <div className={styles.container}>
      <Paper className={styles.iconContainer}>
        {socialLinks.map((link) => (
          <CIconButton
            placement="right"
            title={link.desc}
            key={link.href}
            onClick={() => {}}
          >
            <Link style={{ color: link.color }} to={link.href} target="_blank">
              <link.icon className={styles.icons} />
            </Link>
          </CIconButton>
        ))}
        <CIconButton
          placement="right"
          title={'Report Issue or Improvement'}
          onClick={() => {}}
        >
          <Link style={{ color: 'red' }} to={'https://github.com/yair8520/dev-tools/issues/new'}>
            <BugReportIcon className={styles.icons} />
          </Link>
        </CIconButton>
        <CIconButton
          placement="right"
          title={'Share'}
          onClick={handleShareButton}
        >
          <ShareIcon className={styles.icons} />
        </CIconButton>
      </Paper>
    </div>
  );
};
