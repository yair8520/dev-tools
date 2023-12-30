import React, { useEffect } from 'react';
import styles from './SharedWithMe.module.css';
import { SharedWithMeProps } from './SharedWithMeProps';
import { useParams } from 'react-router-dom';

const SharedWithMe = ({}: SharedWithMeProps) => {
  const targetId = useParams();

  // Use the id parameter as needed
  useEffect(() => {
    console.log('ID from URL:', targetId);
    // Perform actions with the id parameter, such as fetching data
  }, [targetId]);
  return (
    <div className={styles.container}>
      <h1>SharedWithMePage component</h1>
    </div>
  );
};
export default SharedWithMe;
