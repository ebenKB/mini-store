import React from 'react';
import { Button } from 'antd';
import styles from './UserActions.module.css';
import { useParams, Link } from 'react-router-dom';

const UserActions = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div className={styles.wrapper}>
      <Button type="default">Payment History</Button>
      <Link to={`/${slug}/payment`}>
        <Button type="default">New Payment</Button>
      </Link>
      <Button type="primary">New Purchase</Button>
    </div>
  )
}

export default UserActions
