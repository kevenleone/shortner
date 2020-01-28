const INITIAL_STATE = {
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, loading: action.loading || !state.loading };
    }
    default:
      return state;
  }
}
