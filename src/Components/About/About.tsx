import React from 'react';
import styles from './About.module.css';
import { AboutProps } from './AboutProps';
import { Text } from '../Text';
import { mailtoHref, socialLinks } from './helpers';
import { CIconButton } from '../CIconButton';
import { Link } from 'react-router-dom';
import BugReportIcon from '@mui/icons-material/BugReport';
export const About = ({ }: AboutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        {socialLinks.map((link) => (
          <CIconButton
            placement="right"
            title={link.desc}
            key={link.href}
            onClick={() => { }}
          >
            <Link style={{ color: link.color }} to={link.href} target="_blank">
              <link.icon className={styles.icons} />
            </Link>
          </CIconButton>
        ))}
        <CIconButton
          placement="right"
          title={"Report a Bug"}
          onClick={() => { }}
        >
          <Link style={{ color: "red" }} to={mailtoHref}>
            <BugReportIcon className={styles.icons} />
          </Link>
        </CIconButton>
      </div>
    </div>
  );
};
