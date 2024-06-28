import React from 'react'
import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Demo = ({Themevalue}) => {
  const usevalue=useContext(Themevalue)
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/")
  }, 3000);
  return (
<>

<div>hello world</div>
<button >Lucky{usevalue}</button>

</>
  )
}

export default Demo
