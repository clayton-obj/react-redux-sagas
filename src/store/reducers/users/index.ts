import {UserType} from './../../actions'
import * as types from '../../types'

interface UserState{
  user: UserType,
  loading:boolean,
  error:boolean
}

const INITIAL_STATE: UserState = {
  user:{
    name:'',
    avatar_url:'',
  },
  loading:false,
  error:false
}

export const userReducer = (state = INITIAL_STATE, action:{type:string, payload:UserType}) => {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {...state, user: action.payload, loading: true, error:false}
      case types.GET_USER_SUCCESS:
        return {...state, user: action.payload, loading: false, error:false}
    case types.GET_USER_FAILURE:
      return {...state, loading: false, error:true}
      default:
      return state
  }
}