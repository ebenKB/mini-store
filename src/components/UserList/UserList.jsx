import React, { useState } from 'react';
import { List, Button } from 'antd';
import styles from './UserList.module.css';
import { selectCustomers } from '../../redux/slices/customers.slice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchInput from '../SearchInput';

const UserList = () => {
  const users = useSelector(selectCustomers);
  const [foundUsers, setFoundUsers]= useState(null);

  const getUserNameSlug = (username, id) => {
    return `${username.replace(/\s/g, "-")}_${id}`;
  }

  const handleSearch = (text) => {
    const re = new RegExp(text.toLowerCase().trim());
    let found = users.map((u) => {
      const data = u.name.toLowerCase().match(re);
      if (data) {
        return u;
      } else return null;
    });

    found = found.filter((x) => x !== null);
    setFoundUsers(found);
  }

  const getUsers  = () => {
    if (foundUsers) {
      return foundUsers;
    } else return users;
  }

  return (
    <div>
      <SearchInput
        handleAction={(text) => handleSearch(text)}
      />
      <List
        className={styles.user_list}
        dataSource={getUsers()}
        renderItem={user => (
          <List.Item 
            actions={[
              <Button type="primary" size="small">
                <Link className={styles.link_item} to={`/${getUserNameSlug(user.name, user.id)}`}>
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
    </div>
  )
}

export default UserList
