import React from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const CustomerPayment = () => {
  return (
    <ContentWrapper>
      <h3>New Payment</h3>
      <Input placeholder="Enter amount" />
      <div className="mt-20">
        <Link to="/">
          <Button className="mr-5">Cancel</Button>
        </Link>
        <Button type="primary">Save</Button>
      </div>
    </ContentWrapper>
  )
}

export default CustomerPayment
