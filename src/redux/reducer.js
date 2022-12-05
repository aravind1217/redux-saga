import { USER_ERROR,USER_SUCCESS,USER_START, USER_CREATE_ERROR,USER_CREATE_SUCCESS,USER_CREATE_START,USER_DELETE_ERROR,USER_DELETE_START,USER_DELETE_SUCCESS ,USER_UPDATE_ERROR,USER_UPDATE_START,USER_UPDATE_SUCCESS} from "./actionTypes"
const initialState={
    users:[],
    loading:false,
    error:null

}



const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_START:
        case USER_CREATE_START:
        case USER_DELETE_START:
        case USER_UPDATE_START:
            return{
                ...state,
                loading:true
            }
        case USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case USER_CREATE_SUCCESS:
        case USER_UPDATE_SUCCESS:
            return{
                    ...state,
                    loading:false,
                  
                }
        case USER_DELETE_SUCCESS:
            return{
                            ...state,
                            loading:false,
                            users:state.users.filter((item)=> item.id !== action.payload)
                          
                        }
        case USER_ERROR:
        case USER_CREATE_ERROR:
        case USER_DELETE_ERROR:
        case USER_UPDATE_ERROR:
            return{
                    ...state,
                    loading:false,
                    error:action.payload
            }
        default:
            return state
    }

}




export default userReducer