import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const adduserHandler = (userName,age) =>{
    setUsersList((prev)=>{
      return [
        ...prev,
        {name:userName,age:age}
      ]
    })
  }
  return (
    <div className="w-full min-h-screen bg-gray-700 flex flex-col gap-3 justify-center items-center">
      <AddUser onAddUser={adduserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
