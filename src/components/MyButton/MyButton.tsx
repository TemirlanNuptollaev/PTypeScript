import React from 'react'
import cl from './MyButton.module.css'

interface MyButton {
  children?: React.ReactNode;
  onClick?: () => void;
}

function MyButton({onClick ,children}: MyButton) {
  return (
    <button onClick={onClick} className={cl.myBtn}>
      {children}
    </button>
  )
}

export default MyButton