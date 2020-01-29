const INITIAL_STATE = {
  loading: false,
  pageType: 'SignIn',
  loggedUser: {},
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
      return { ...state, loggedUser: action.payload };
    }
    default:
      return state;
  }
}
