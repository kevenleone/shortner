const INITIAL_STATE = {
  loading: false,
  softLoading: false,
  pageType: 'SignIn',
  toasts: [],
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
    case 'ADD_TOAST': {
      return { ...state, toasts: [...state.toasts, { id: `${Math.random()}`, ...action.payload }] };
    }
    case 'REMOVE_TOAST': {
      return { ...state, toasts: state.toasts.slice(0, -1) };
    }
    case 'SET_SOFTLOADING': {
      return { ...state, softLoading: !state.softLoading };
    }
    default:
      return state;
  }
}
