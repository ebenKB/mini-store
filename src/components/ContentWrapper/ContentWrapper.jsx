import React from 'react';
import styles from './ContentWrapper.module.css';

const ContentWrapper = ({ children, size }) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      {children}
    </div>
  )
}

export default ContentWrapper
