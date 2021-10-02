import React from 'react'
import Card from '../UI/Card'

const UsersList = ({users})=>{ 
  return (  
    <Card className="w-3/4 px-4">
      {
          users.length > 0?
          <ul>
            {
              users.map((user,index) => {
                return (
                  <li key={index}>{user.name}.- {user.age} (Age in Years)</li>
                )
              })
            }
          </ul>
      :
          <li>The list is empty</li>
      }
    </Card>
  ) 
}


export default UsersList