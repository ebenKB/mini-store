import React from 'react';
import styles from './History.module.css';
import { Button, Drawer, List } from 'antd';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const History = ({ visible, handleDrawerAction }) => {
  const params = useParams();
  const { slug } = params;
  const id = slug.split('_')[1];

  const payments = useSelector(state => state.payments
    .filter((p) => p.id === parseInt(id, 10)))

  const onClose = () => {
    handleDrawerAction();
  }
  
  return (
    <Drawer
      width={340}
      visible={visible}
      title={<span className={styles.title}>Payment History (29)</span>}
      placement="right"
      closable={false}
      onClose={onClose}
      headerStyle={{background: 'var(--dark)', color: 'white !important'}}
    >
      <div className={styles.content}>
        <List
          dataSource={payments}
          renderItem={payment => (
            <List.Item>Paid GHS{payment.amount}
              <span>&nbsp;on Tuesday, November 4 2020</span>
            </List.Item>
          )}
        />
      </div>
      <div className={styles.footer}>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Drawer>
  )
}

export default History
