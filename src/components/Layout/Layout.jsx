import React, { useState } from 'react';
import styles from './Layout.module.css';
import SearchInput from '../SearchInput';
import UserList from '../UserList/UserList';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Layout = ({children}) => {
  const [showHistory, setCanShowHistory] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <SearchInput />
        <UserList />
        <div className="mt-20">
          <Link to="/customer/new">
            <Button type="default" 
              icon={<PlusOutlined />} size="medium">
              Add new
            </Button>
          </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
