export const LOG_IN = 'LOG_IN' as const;
export const LOG_OUT = 'LOG_OUT' as const;

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

type UserState = {
  user: { isLoggedIn: boolean };
  signUpData?: {};
  loginData?: {};
};

const initialState: UserState = {
  user: {
    isLoggedIn: false,
  },
  signUpData: {},
  loginData: {},
};

type UserAction =
  | ReturnType<typeof loginAction>
  | ReturnType<typeof logoutAction>;

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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
