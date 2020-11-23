import React, { useEffect } from 'react';
import { List, Button } from 'antd';
import styles from './UserList.module.css';
import { selectCustomers } from '../../redux/slices/customers.slice';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserByName, getUserByNameAsync, selectUserByName } from '../../redux/slices/customers.slice'

const UserList = () => {
  const users = useSelector(selectCustomers);
  const user = useSelector(selectUserByName);

  const getUserNameSlug = (username) => {
    return username.replace(/\s/g, "-");
  }

  return (
    <List
      className={styles.user_list}
      dataSource={users}
      renderItem={user => (
        <List.Item 
          actions={[
            <Button type="primary" size="small">
              <Link className={styles.link_item} to={`/${getUserNameSlug(user.name)}`}>
                View
              </Link>
            </Button>
          ]}
          className={styles.list}
        >
          {user.name}
        </List.Item>
      )}
    />
  )
}

export default UserList
