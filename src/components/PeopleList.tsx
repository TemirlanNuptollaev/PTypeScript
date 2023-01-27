import React, {FC} from 'react'
import Card from './Card/Card'
import MyButton from './MyButton/MyButton'
import {PeopleListProps} from '../types/types'

 
const PeopleList: FC<PeopleListProps>= ({users}) => {
  return (
    <>
      { users.map((user) => {
        return(
          <Card key={user.id} width='1000px' height='auto' >
            <h1>name:{user.name}</h1>
            <article>city:{user.address.city}{user.email}</article>
            <h3>profile:{user.address.suite}</h3>
            <MyButton onClick={() => console.log("asdsa")}>Ualeykum assalam</MyButton>
          </Card>)
        })
      }
    </>
    
    
  )
}

export default PeopleList