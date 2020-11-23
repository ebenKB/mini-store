import React, { useState } from 'react'
import UserDetails from '../UserDetails/UserDetails';
import UserActions from '../UserActions/UserActions';
import History from '../History/History';
import { Link } from 'react-router-dom';

const UseDetails = () => {
  const [canShowHistory, setCanShowHistory] = useState(false);

  return (
    <div>
      <UserDetails />
      <UserActions handleShowDrawer = {() => setCanShowHistory(!canShowHistory)} />
      <History visible={canShowHistory} handleDrawerAction = {() => setCanShowHistory(false)} />
      <div className="mt-20 text-center text-gray-400">
        <Link to="/">
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default UseDetails
