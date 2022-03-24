export const LOG_IN = 'LOG_IN' as const;
export const LOG_OUT = 'LOG_OUT' as const;
export const SIGN_UP = 'SIGN_UP' as const;

export const loginAction = () => {
  return {
    type: LOG_IN,
  };
};

export const logoutAction = () => {
  return {
    type: LOG_OUT,
  };
};

export const signUpAction = (payload: {
  id: string;
  password: string;
  nickname: string;
}) => {
  return {
    type: SIGN_UP,
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
  | ReturnType<typeof loginAction>
  | ReturnType<typeof logoutAction>
  | ReturnType<typeof signUpAction>;

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          isLoggedIn: true,
        },
      };
    case LOG_OUT:
      return {
        ...state,
        user: {
          isLoggedIn: false,
        },
      };
    case SIGN_UP:
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
