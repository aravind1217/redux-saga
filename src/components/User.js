import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { loadUser , LoadUserDelete} from '../redux/action'
const User = () => {
    const dispatch =useDispatch()
    const{users, error}= useSelector(state=>state.data)
    console.log(users)

    useEffect(()=>{
        dispatch(loadUser())
    },[])

useEffect(()=>{
  error && alert(error)
},[error])

    const handleDelete=(id)=>{
     if(window.confirm('are you sure want to delete')){
      dispatch(LoadUserDelete(id))
     }
    }
  return (
    <div>
    <table className="table">
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th colSpan='3'>Actions</th>
</tr>
  </thead>
  <tbody>
    {users.map((item, index)=>{
        return(
            <tr  key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td><button  className='btn btn-warning' onClick={()=> handleDelete(item.id)}>Delete</button></td>
            <td><Link to ={`/edit/${item.id}`}><button className='btn btn-secondary'>Edit</button></Link></td>
            <td><Link to ={`/userinfo/${item.id}`}><button className='btn btn-primary'>view</button></Link></td>
            </tr>
        )
    })}
  </tbody>
</table>
    </div>
  )
}

export default User