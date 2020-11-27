import React, { useState } from 'react';
import styles from './Layout.module.css';
import UserList from '../UserList/UserList';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import {HomeOutlined} from '@ant-design/icons'

const Layout = ({children}) => {
  const [showHistory, setCanShowHistory] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.left}>
        <div className="mt-3 mb-3">
          <Link to="/">
            <span className="mr-2">{<HomeOutlined/>}</span>
            Dashboard
          </Link>
        </div>
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
