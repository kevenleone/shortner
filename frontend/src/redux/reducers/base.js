const INITIAL_STATE = {
  loading: false,
  softLoading: false,
  pageType: 'SignIn',
  toasts: [],
  token: localStorage.getItem('@token'),
  loggedUser: JSON.parse(localStorage.getItem('@me') || '{}'),
  loginForm: {
    email: '',
    password: '',
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, loading: action.loading || !state.loading };
    }
    case 'SET_PAGETYPE': {
      return { ...state, pageType: action.payload.payload.pageType };
    }
    case 'SET_FORMUSER': {
      return { ...state, pageType: 'SignIn', loginForm: action.payload };
    }
    case 'SET_LOGGEDUSER': {
      const { user: loggedUser, token } = action.payload;
      localStorage.setItem('@me', JSON.stringify(loggedUser));
      return {
        ...state,
        token,
        loggedUser,
      };
    }
    case 'SET_SOFTLOADING': {
      return { ...state, softLoading: !state.softLoading };
    }
    default:
      return state;
  }
}
