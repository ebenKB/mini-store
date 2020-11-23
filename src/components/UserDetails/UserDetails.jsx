import React, { useEffect } from 'react';
import styles from './UserDetails.module.css';
import { getUserByNameAsync, selectCurrentCustomer, selectUserByName } from '../../redux/slices/customers.slice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const user = useSelector(selectCurrentCustomer);
  const params = useParams();
  const { slug } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    if (slug) {
      dispatch(getUserByNameAsync(slug.replace(/-/g, " ")))
    }
    return () => {}
  }, [slug])

  return (
    <div className={styles.wrapper}>
      {user && (
        <h1 className="text-5xl font-medium">GHS {user.balance}</h1>
      )}
    </div>
  )
}

export default UserDetails
