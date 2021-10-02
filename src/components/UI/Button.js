import React from 'react'

const Button = ({className,children,onClick})=>{ 
return (
  <button className={`rounded px-2 py-1 bg-purple-500 ${className}`} onClick={onClick}>
    {children}
  </button>
) 
}

export default Button