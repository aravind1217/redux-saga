import React ,{useEffect,useState}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
const UserInfo = () => {
 
  const{users}= useSelector(state=> state.data)
  console.log(users)
  const {id}= useParams()
  console.log(id)

  const user= users.find(item=> item.id === Number(id))
  console.log(user)
  return (
    <React.Fragment>
    <div>ID:{user.id}</div>
    <div>ID:{user.name}</div>
    <div>ID:{user.email}</div>
    </React.Fragment>
   
  )
}

export default UserInfo