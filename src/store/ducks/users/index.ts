import { UserType, UsersStateType, UserActionTypes } from "./types";



const INITIAL_STATE: UsersStateType = {
  user: {
    name: "",
    avatar_url: "",
  },
  loading: false,
  error: false,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: UserType }
) => {
  switch (action.type) {
    case UserActionTypes.GET_USER_REQUEST:
      return { ...state, loading: true, error: false };
    case UserActionTypes.GET_USER_FAILURE:
      return { ...state, loading: false, error: true };
    case UserActionTypes.GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: false };
    default:
      return state;
  }
};
