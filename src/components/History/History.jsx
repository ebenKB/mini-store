import React, { useState } from 'react';
import styles from './History.module.css';
import { Button, Drawer } from 'antd';
import { useSelector } from 'react-redux';
import { selectPayments } from '../../redux/slices/payment.slice';


const History = ({ visible, handleDrawerAction }) => {
  const payments = useSelector(selectPayments)
  // const [visible, setVisible] = useState(false)

  const onClose = () => {
    handleDrawerAction();
    // setVisible(false);
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
        {payments && payments.map((payment) => (
          <div>Paid GHS{payment.amount}
            <span>&nbsp;on Tuesday, November 4 2020</span>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Drawer>
  )
}

export default History
