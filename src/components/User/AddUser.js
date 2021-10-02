import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import Model from '../UI/Model';

const AddUser = ({onAddUser})=>{ 
  const [userName, setUserName] = useState("")
  const [age, setAge] = useState("")
  const [showErrorModal, setShowErrorModal] = useState()

  const addSubmitHandler = (e) => {
    e.preventDefault();

    if (userName.trim().length < 1 || age.trim().length < 1) {
      // alert(JSON.stringify("data incomplete"))  
      setShowErrorModal({title:"Ups... something bad happend",message:"data incomplete"})
      return
    }
    if (parseInt(age) < 1) {
      // alert(JSON.stringify("insert a age greater than 0"))  
      setShowErrorModal({title:"Ups... something bad happend",message:"insert a age greater than 0"})
      return
    }

    onAddUser(userName,age)
    
    setUserName("")
    setAge("")
  }
return (
  <>
    <Card className="w-3/4 p-4">
        <div>
          <form onSubmit={addSubmitHandler}>
            <div className="w-full">
              <label className="block" htmlFor="user">Username</label>
              <input className="w-full px-2 py-1 rounded" type="text" id="user" 
                onChange={(event)=> {setUserName(event.target.value)}}
                value={userName}
              /> 
            </div>
            <div className="w-full mb-2">
              <label className="block" htmlFor="age">Age (Years)</label>
              <input className="w-full px-2 py-1 rounded" type="number" id="age" 
                onChange={(event)=> {setAge(event.target.value)}}
                value={age}
              /> 
            </div>
            <div className="w-full">
              <Button>Add client</Button>
            </div>
          </form>
        </div>
      </Card>
      
      {
        showErrorModal && <Model title={showErrorModal.title} message={showErrorModal.message} onClose={()=>{setShowErrorModal(null)}}/>
      }
  </>
) 
}
 
export default AddUser
