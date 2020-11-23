import React from 'react'
import UserDetails from '../UserDetails/UserDetails';
import UserActions from '../UserActions/UserActions';
import History from '../History/History';
import { Link } from 'react-router-dom';

const UseDetails = () => {
  return (
    <div>
      <UserDetails />
      <UserActions />
      <History />
      <div className="mt-20 text-center text-gray-400">
        <Link to="/">
          Go Back
        </Link>
      </div>
    </div>
  )
}

export default UseDetails
