import React, { useState, FC, useEffect} from 'react'
// import Card from './components/Card/Card'
// import MyButton from './components/MyButton/MyButton'
import PeopleList from './components/PeopleList'
import './App.css'
import { IUser } from './types/types'
import axios from 'axios'


const App = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const [value, setVaule] = useState<string>('asdsa')
// const users: IUser[] = [
//   {
//     title: "Askhat",
//     job: "programmer",
//     url: "adasd/as/d/asd/asd/as/"
//   },
//   {
//     title: "islam",
//     job: "programmer",
//     url: "adasd/as/d/asd/asd/as/"
//   } ,
//   {
//     title: "Jumabek",
//     job: "programmer",
//     url: "adasd/as/d/asd/asd/as/"
//   } ,
  
// ]

useEffect(() => { 
  fetchUsers()

}, [])

async function fetchUsers() {
  try{
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
    setUsers(response.data);
  }
  catch (e){
    alert(e)
  }
}


function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
  setVaule(e.target.value)
}

  return (
    <div className='App'>

      <input type='text' placeholder='' value={value} onChange={changeHandler}></input>
      <PeopleList users={users}/>
    </div>
  )
}

export default App

