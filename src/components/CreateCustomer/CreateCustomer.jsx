import React from 'react';
import styles from './CreateCustomer.module.css';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

const CreateCustomer = () => {
  return (
    <ContentWrapper>
      <h3>Add new customer</h3>
        <div className={styles.item}>
          <Input placeholder="Enter full name" />
        </div>
        <div className={styles.item}>
          <Input type="number" placeholder="Initial Balance" />
        </div>
        <div className="mt-20">
          <Link to="/">
            <Button className="mr-5">Cancel</Button>
          </Link>
          <Button type="primary"> Save</Button>
      </div>
    </ContentWrapper>
  )
}

export default CreateCustomer
