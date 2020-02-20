const INITIAL_STATE = {
  shortners: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SHORTNER': {
      return { ...state, shortners: [...state.shortners, action.payload] };
    }
    case 'GET_ALL_SHORTNER': {
      return { ...state, shortners: action.payload };
    }
    default:
      return state;
  }
}
