import {take,takeEvery,takeLatest,put,all,delay,fork,call} from 'redux-saga/effects'
import { USER_ERROR,USER_START,USER_SUCCESS, USER_CREATE_START,USER_CREATE_SUCCESS,USER_CREATE_ERROR ,USER_DELETE_ERROR,USER_DELETE_SUCCESS,USER_DELETE_START,USER_UPDATE_ERROR,USER_UPDATE_START,USER_UPDATE_SUCCESS} from "./actionTypes";
import { loadAPI, loadAPICreate ,loadAPIDelete,loadAPIUpdate} from './api';

import { loadSuccess,loadError , loadCreateError,loadCreateSuccess, loadDeleteSuccess,loadDeleteError, loadUpdateSuccess, loadUpdateError} from './action';


export function* onLoadUser(){
    try{
        const response= yield call(loadAPI)
        console.log(response)
        if (response.status=== 200){
            yield put(loadSuccess(response.data))
        }
    }
    catch(error){
        yield put(loadError(error.response.data))

    }
}


export function* onLoadUserCreate({payload}){
    try{
        const response= yield call(loadAPICreate, payload)
        if(response.status===200){
            yield put(loadCreateSuccess(response.data))
        }
    }
    catch(error){
        yield put(loadCreateError(error.response.data))

    }
}


export function* onloadDeleteUser(userid){
    try{
        const response= yield call(loadAPIDelete, userid)
        if(response.status===200){
            yield put(loadDeleteSuccess(userid))
        }
    }
    catch(error){
        yield put(loadDeleteError(error.response.data))

    }

}


// eslint-disable-next-line require-yield
export function* onLoadUserUpdate({payload:{id,formValue}}){
    try{
        const response = yield call(loadAPIUpdate,id,formValue)
        if(response.status === 200){
            yield put(loadUpdateSuccess())
        }
        
    }
    catch(error){
            yield put(loadUpdateError(error.response.data))
    }

}


export function* loadUser(){
    yield takeEvery(USER_START, onLoadUser)
}

export function* onCreateUser(){
    yield takeLatest(USER_CREATE_START, onLoadUserCreate)
}


export function* onDeleteUser(){
    while(true){
        const {payload:userid}= yield take(USER_DELETE_START)
        yield call(onloadDeleteUser,userid)
    }
}


export function* onUpdateUser(){
    yield takeLatest(USER_UPDATE_START, onLoadUserUpdate)
}



const userSagas=[
    fork(onLoadUser),fork(onCreateUser),fork(onDeleteUser),fork(onUpdateUser)
]


export default function* rootSaga(){
    yield all([...userSagas])
}