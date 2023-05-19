import React from 'react';
import styles from './About.module.css';
import { AboutProps } from './AboutProps';
import { Text } from '../Text';
import { links } from './helpers';
import { CIconButton } from '../CIconButton';
import { Link } from 'react-router-dom';

export const About = ({ }: AboutProps) => {

  return (
    <div className={styles.container}>
      <Text>Created By Yair Gabay </Text>
      <div className={styles.iconContainer}>
        {links.map((link) =>
          <CIconButton placement='top' title={link.desc} key={link.desc} onClick={() => { }}>
            <Link to={link.href} target="_blank" >
              <link.icon />
            </Link>
          </CIconButton>
        )}
      </div>
    </div>
  );
};
