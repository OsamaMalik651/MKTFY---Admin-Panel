import React, { useEffect, useState } from 'react'

import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import UserList from 'components/User/UserList';
import UserDetails from 'components/User/UserDetails';

const Users = ({ searchTerm, routes }) => {
  console.log(searchTerm)
  return (
    <div >
      {<Switch>
        <Route path="/admin/user/:userId" exact component={UserDetails} />
        <Route path="/admin/user" component={UserList} />
      </Switch>}
    </div>
  )
}

export default Users
