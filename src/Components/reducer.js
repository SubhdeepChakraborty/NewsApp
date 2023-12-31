const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        loading: false,
        hits: action?.payload?.hits,
        page: action?.payload?.page,
        nbPages: action?.payload?.nbPages,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state?.hits?.filter(
          (currElment) => currElment?.objectID !== action?.payload
        ),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action?.payload,
      };
    case "NEXT_PAGE":
      let pageNumInc = state?.page + 1;
      if (pageNumInc > state?.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };

    case "PREV_PAGE":
      let pageNum = state?.page - 1;
      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};

export default reducer;
