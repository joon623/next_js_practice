export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCESSS = 'LOG_IN_SUCESSS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE' as const;
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' as const;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const;
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE' as const;

export const signupRequestAction = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

export const signupSuccessAction = () => {
  return {
    type: SIGNUP_SUCCESS,
  };
};

export const signupFailureAction = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};

export const loginRequestAction = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const loginSuccessAction = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const loginFailureAction = () => {
  return {
    type: LOG_IN_REQUEST,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccessAction = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutFailureAction = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

export const signUpRequestAction = (payload: {
  id: string;
  password: string;
  nickname: string;
}) => {
  return {
    type: SIGNUP_REQUEST,
    payload,
  };
};

type UserState = {
  isLoggedIn: false;
  user?: { id: number; nickname: string };
  signUpData?: {};
  loginData?: {};
};

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

type UserAction =
  | ReturnType<typeof loginRequestAction>
  | ReturnType<typeof logoutRequestAction>
  | ReturnType<typeof signUpRequestAction>;

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        user: {
          isLoggedIn: true,
        },
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: {
          isLoggedIn: false,
        },
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        user: {
          isLoggedIn: false,
        },
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
