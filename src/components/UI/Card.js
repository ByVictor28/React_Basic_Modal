import React from 'react'

const Card = ({children,className})=>{ 
return (
  <div className={`${className} bg-gray-400 rounded shadow-lg `}>
    {children}
  </div>
) 
}

export default Card