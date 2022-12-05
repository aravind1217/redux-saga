import axios from 'axios'
export const loadAPI= async()=> await axios.get('http://localhost:5000/users')
export const loadAPICreate= async(user)=> await axios.post('http://localhost:5000/users',user)
export const loadAPIDelete= async(userid)=> await axios.delete(`http://localhost:5000/users/${userid}`)

export const loadAPIUpdate= async(userid, info)=> await axios.put(`http://localhost:5000/users/${userid}`,info)


