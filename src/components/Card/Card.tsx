import React, {FC} from 'react'
import cl from "./Card.module.css"
import {CardProps} from '../../types/types'

const Card: FC<CardProps> = ({width, height, children, backgrounColor}) => {
  return (
    <div style={{ width, height, backgroundColor:backgrounColor}} className={cl.card}>
        {children}
    </div>
  )
}

export default Card