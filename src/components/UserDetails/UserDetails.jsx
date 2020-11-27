import React, { useEffect } from 'react';
import styles from './UserDetails.module.css';
import { getUserByNameAsync, selectCurrentCustomer } from '../../redux/slices/customers.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

const UserDetails = () => {
  const user = useSelector(selectCurrentCustomer);
  const params = useParams();
  const { slug } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      const slugDetails = slug.split('_')
      dispatch(getUserByNameAsync(slugDetails[0].replace(/-/g, " ")))
    }
    return () => {}
  }, [slug])

  return (
    <div>
      <div className="p-3 text-2xl flex inline content-center items-center">
        <span>{user && user.name}</span>
        <Button size="small" type="text"><DeleteOutlined /></Button>
      </div>
      <div className={styles.wrapper}>
        {user && (
          <h1 className="text-5xl font-medium text-gray-600">GHS {user.balance}</h1>
        )}
      </div>
    </div>
  )
}

export default UserDetails
