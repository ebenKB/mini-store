import React, { useState } from 'react';
import styles from './CreateCustomer.module.css';
import { Input, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { useDispatch } from 'react-redux';
import { addNewCustomer } from '../../redux/slices/customers.slice';

const CreateCustomer = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState({
    name: '',
    balance: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({...customer, [name]: value});
  };

  const handleSaveCustomer = () => {
    if (customer.name) {
      dispatch(addNewCustomer(customer));
    }
  };

  const handleCancel = () => {
    history.goBack();
  }

  return (
    <ContentWrapper>
        <h3>Add new customer</h3>
        <div className={styles.item}>
          <Input 
            placeholder="Enter full name"
            onChange={handleInputChange}
            value={customer.name}
            name="name"
          />
        </div>
        <div className={styles.item}>
          <Input 
            type="number" 
            placeholder="Initial Balance"
            onChange={handleInputChange}
            value={customer.balance}
            name="balance"
          />
        </div>
        <div className="mt-20">
          <Button className="mr-5" onClick={handleCancel}>Cancel</Button>
          <Button type="primary" onClick={handleSaveCustomer}>Save</Button>
      </div>
    </ContentWrapper>
  )
}

export default CreateCustomer
