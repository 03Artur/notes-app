function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const { type } = action;
    return type in handlers ? handlers[type](state, action) : state;
  };
}

export default createReducer;
