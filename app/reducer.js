export default function reducer(state, action) {
  switch (action.type) {
    case 'LEGO@ADD':
      return [
        ...state,
        {
          color: action.color,
          id: state[state.length - 1] ? state[state.length - 1].id + 1 : 1,
          shape: action.shape
        }
      ];
    default:
      return state;
  }
}
