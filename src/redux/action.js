import { USER_ERROR,USER_START,USER_SUCCESS ,USER_CREATE_ERROR,USER_CREATE_START,USER_CREATE_SUCCESS,USER_DELETE_ERROR,USER_DELETE_START,USER_DELETE_SUCCESS,USER_UPDATE_ERROR,USER_UPDATE_SUCCESS,USER_UPDATE_START} from "./actionTypes";


export const loadUser=()=>({
    type: USER_START
})

export const loadSuccess=(users)=>({
    type: USER_SUCCESS,
    payload:users
})

export const loadError=(error)=>({
    type: USER_ERROR,
    payload:error
})




export const LoadUserCreate=(user)=>({
    type: USER_CREATE_START,
    payload:user
})

export const loadCreateSuccess=()=>({
    type: USER_CREATE_SUCCESS,
    
})

export const loadCreateError=(error)=>({
    type: USER_CREATE_ERROR,
    payload:error
})


export const LoadUserDelete=(userid)=>({
    type: USER_DELETE_START,
    payload:userid
})

export const loadDeleteSuccess=(userid)=>({
    type: USER_DELETE_SUCCESS,
    payload:userid
    
})

export const loadDeleteError=(error)=>({
    type: USER_DELETE_ERROR,
    payload:error
})



export const LoadupdateStart=(info)=>({
    type: USER_UPDATE_START,
    payload:info
})

export const loadUpdateSuccess=()=>({
    type: USER_UPDATE_SUCCESS,
   
    
})

export const loadUpdateError=(error)=>({
    type: USER_UPDATE_ERROR,
    payload:error
})
