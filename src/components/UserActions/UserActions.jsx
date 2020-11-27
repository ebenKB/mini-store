import React from 'react';
import { Button } from 'antd';
import styles from './UserActions.module.css';
import { useParams, Link } from 'react-router-dom';

const UserActions = ({ handleShowDrawer }) => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className={styles.wrapper}>
      <Button type="default" onClick={handleShowDrawer}>Payment History</Button>
      <Link to={`/${slug}/payment`}>
        <Button type="default">New Payment</Button>
      </Link>
      <Link to={`/${slug}/purchase`}>
        <Button type="primary">New Purchase</Button>
      </Link>
    </div>
  )
}

export default UserActions
