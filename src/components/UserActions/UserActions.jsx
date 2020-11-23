import React from 'react';
import { Button } from 'antd';
import styles from './UserActions.module.css';

const UserActions = () => {
  return (
    <div className={styles.wrapper}>
      <Button type="default">Payment History</Button>
      <Button type="default">New Payment</Button>
      <Button type="primary">New Purchase</Button>
    </div>
  )
}

export default UserActions
