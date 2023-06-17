//step 1.  first need to create context
//step 2.  second provider
//step 3.  third we need a consumer so using useContext hook

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Components/reducer";

const BASE_URL = "https://hn.algolia.com/api/v1/search?";

const initialise = {
  loading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

//step1. ✔
export const AppContext = createContext();

//step2. ✔
export const AppProvider = ({ children }) => {
  //using useReducer Hook also worked like useState used for management ok
  const [state, dispatch] = useReducer(reducer, initialise);

  // useEffect is for api calling so that we can see data in the console
  useEffect(() => {
    fetchDataApi(`${BASE_URL}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  // Api calling ✔
  const fetchDataApi = async (Url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(Url);
      const data = await res.json();
      console.log(data);
      console.log(data.hits);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          page: data.page,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  //removing post on clicking
  const removePost = (postID) => {
    dispatch({ type: "REMOVE_POST", payload: postID });
  };

  // ..searching fn
  const searchPost = (Typed) => {
    dispatch({ type: "SEARCH_POST", payload: Typed });
  };

  //pagination
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPreviousPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPreviousPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Here we actually creating a custom hook and by using this thing you can get rid of those two lines of importing in another jsx
export const useGlobalCustomHook = () => {
  return useContext(AppContext);
};
