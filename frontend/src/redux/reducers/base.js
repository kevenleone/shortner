const INITIAL_STATE = {
  loading: false,
  softLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, loading: action.loading || !state.loading };
    }
    case 'SET_SOFTLOADING': {
      return { ...state, softLoading: !state.softLoading };
    }
    default:
      return state;
  }
}
