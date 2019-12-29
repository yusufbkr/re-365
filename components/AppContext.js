import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return action.data;
    case 'clear':
      return {
        videos: []
      };
    default:
      throw new Error();
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    videos: []
  });

  const dispatchProxy = action => {
    switch (action.type) {
      case 'videosFetch':
        return axios
          .post('/api/videos', {
            name: action.data
          })
          .then(res => ({
            videos: res.data.videos
          }))
          .then(({ videos }) => {
            dispatch({
              type: 'set',
              data: { videos }
            });
          });
      default:
        return dispatch(action);
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch: dispatchProxy }}>
      {children}
    </AppContext.Provider>
  );
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
