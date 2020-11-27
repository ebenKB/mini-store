import React from 'react';
import { Card } from 'antd';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { useSelector } from 'react-redux';
import { selectTotalPayable, selectTotalReceivable } from '../../redux/slices/customers.slice';

const Dashboard = () => {
  const payable = useSelector(selectTotalPayable);
  const receivable = useSelector(selectTotalReceivable);

  return (
    <ContentWrapper size="large">
      <div className="flex">
        <div className="mr-5">
          <Card title={<span className="text-gray-400">Total Receivable</span>} style={{ width: 300 }}>
            <span className="text-3xl font-bold text-gray-600">GHS {receivable}</span>
          </Card>
        </div>
        <Card title={<span className="text-gray-400">Total Payable</span>} style={{ width: 300 }}>
          <span className="text-3xl font-bold text-gray-600">GHS {payable}</span>
        </Card>
      </div>
    </ContentWrapper>
  )
}

export default Dashboard
