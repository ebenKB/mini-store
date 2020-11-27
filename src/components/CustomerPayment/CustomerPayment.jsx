import React, { useState } from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { Input, Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newPayment } from '../../redux/slices/payment.slice';
import { selectCurrentCustomer } from '../../redux/slices/customers.slice';

const CustomerPayment = () => {
  const dispatch = useDispatch();
  const [amount , setAmount] = useState(0.0);
  const params = useParams();
  const {slug} = params;
  const user = useSelector(selectCurrentCustomer);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAmount(value)
  }

  const handleSavePayment = () => {
    console.log('We want to save the payment');
    dispatch(newPayment({amount, user}));
  };

  return (
    <ContentWrapper>
      <h3>New Payment</h3>
      <Input
        name="payment"
        placeholder="Enter amount"
        onChange={handleInputChange}
        value={amount}
      />
      <div className="mt-20">
        <Link to="/">
          <Button className="mr-5">Cancel</Button>
        </Link>
        <Button type="primary"
          onClick={handleSavePayment}
        >Save</Button>
      </div>
    </ContentWrapper>
  )
}

export default CustomerPayment;
