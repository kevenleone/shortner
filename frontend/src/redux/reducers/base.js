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
      localStorage.setItem('@me', JSON.stringify({
        username: 'Sidney Filho',
        company: 'BRK Ambiental',
        email: 'sidney@hotmail.com',
      }));
      return {
        ...state,
        token: action.payload.token,

      };
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
