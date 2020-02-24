const INITIAL_STATE = {
  pageType: 'SignIn',
  token: localStorage.getItem('@token'),
  me: JSON.parse(localStorage.getItem('@me') || '{}'),
  loginForm: {
    email: '',
    password: '',
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOGGEDUSER': {
      const { user: me, token } = action.payload;
      localStorage.setItem('@me', JSON.stringify(me));
      return {
        ...state,
        token,
        me,
      };
    }
    case 'SET_FORMUSER': {
      return { ...state, pageType: 'SignIn', loginForm: action.payload };
    }
    case 'SET_PAGETYPE': {
      return { ...state, pageType: action.payload.payload.pageType };
    }
    default:
      return state;
  }
}
