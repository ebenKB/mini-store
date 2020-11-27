import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { Input, Select, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NewPurchase = () => {
  const history = useHistory();

  const handleCancel = () => {
    history.goBack()
  };

  return (
    <ContentWrapper>
      <form>
        <h3>New Purchase</h3>
        <Input placeholder = "Enter amount" />
        <div className="mt-5">
          <Select
            defaultValue="--Select an item--" 
            style={{ width: 200 }}
            onChange={console.log('hey')}
          >
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select>
        </div>
        <div className="mt-10">
          <Button
            type="Default"
            className="mr-3"
            onClick={handleCancel}
          >Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </form>
    </ContentWrapper>
  )
}

export default NewPurchase
