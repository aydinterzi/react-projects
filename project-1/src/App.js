import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [userList,setUserList]=useState([]);

  const addUserHandler = (user) => {
    setUserList(prevUsers => [...prevUsers,user]);
  }
  return (
    <div>
      <AddUser addUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
