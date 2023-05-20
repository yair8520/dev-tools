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
      <Text>Created By Yair Gabay </Text>
      <div className={styles.iconContainer}>
        {socialLinks.map((link) => (
          <CIconButton
            placement="top"
            title={link.desc}
            key={link.href}
            onClick={() => { }}
          >
            <Link style={{ color: link.color }} to={link.href} target="_blank">
              <link.icon />
            </Link>
          </CIconButton>
        ))}
        <CIconButton
          placement="right"
          title={"Report a Bug"}
          onClick={() => { }}
        >
          <Link style={{ color: "inherit" }} to={mailtoHref}>
            <BugReportIcon />
          </Link>
        </CIconButton>
      </div>
    </div>
  );
};
