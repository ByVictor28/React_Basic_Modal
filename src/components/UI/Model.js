import React from 'react'
import Button from './Button'
import Card from './Card'

const Model = ({title,message,onClose})=>{
  return (
    <>
      <div onClick={onClose} className="w-full min-h-screen bg-black fixed top-0 left-0 flex justify-center items-center bg-opacity-40">  
        <Card className='w-3/4 '>
          <header className="bg-purple-500 px-4 py-2 rounded mb-4 rounded-b-none">
            <h2 className="text-4xl font-bold">{title}</h2>
          </header>
          <div className="px-4">
            <p>{message}</p>
          </div>
          <footer className="mt-5 p-4 flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </footer>
        </Card>
      </div>
    
    </>
  )
}

export default Model