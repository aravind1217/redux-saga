import React,{useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { LoadUserCreate, LoadupdateStart } from '../redux/action';
const initialState={
  name:'',
  email:''
}



const AddEditUser = () => {
  const[formValue,setformValue]= useState(initialState)
  const [edit, setEdit]=useState(false)
   const {users}= useSelector(state=> state.data)
  console.log(users)
  const {name, email}= formValue
  const history = useNavigate()
  const dispatch = useDispatch()
  const {id} =useParams()
  console.log(id)

useEffect(()=>{

  if (id){
  const singleUser = users.find(item => item.id=== Number(id))
  setformValue({...singleUser})
  setEdit(true)
  }
  else{
    setEdit(false)
    setformValue({...initialState})
  }

},[id])

  const handleSubmit=(e)=>{
    e.preventDefault()


    if (name && email){

  

    if(!edit){
     
        dispatch(LoadUserCreate(formValue))
        setTimeout(()=>history('/'), 500)
      
    }
    else{
      dispatch(LoadupdateStart({id,formValue}))
      setEdit(false)
    }

    }
  
  }

  const onHandleChange=(e)=>{
    let {name, value}=e.target
    setformValue({...formValue,[name]:value})
  
  
  }
  return (
    <div>
    <form  onSubmit={handleSubmit}>
    <div className='container'>

    <label>
    Name :
    </label>
    <br/>
    <input  value={name || ""} name='name'    onChange={onHandleChange}  required />
    
    <br/>
    <br/>


    <label>
    Email :
    </label>
    <br/>
    <input  value={email|| ''} name='email'    onChange={onHandleChange}  required  />

    </div>

    <br/>
    <br/>
    <button type='submit'  className='btn btn-primary' >
    {!edit ? 'Add': 'Edit' }
    </button> 
    <br/>
    <br/>
    <button onClick={()=> history('/')}>
    Back
    </button>
    </form>
    </div>
  )
}

export default AddEditUser