import { useReducer } from 'react';

import NasaImageAPIContext from './NasaImageAPIContext';
import NasaImageOfTheDay from './NasaImageOfTheDay';

const initialState = {
  data: null,
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'set_loading':
      return {
        ...state,
        loading: action.payload,
      };
    case 'set_image_data':
      return {
        ...state,
        data: action.payload,
      };
    default:
      throw new Error(`Invalid action: ${action.type}`);
  }
}
const API_KEY = import.meta.env.VITE_API_KEY;

function useNasa() {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getData() {
    dispatch({
      type: 'set_loading',
      payload: true,
    });
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    const json = await response.json();
    dispatch({
      type: 'set_image_data',
      payload: json,
    });
    dispatch({
      type: 'set_loading',
      payload: false,
    });
  }

  return {
    getData,
    state,
    dispatch,
  }
}

function App() {
  return (
    <NasaImageAPIContext.Provider value={useNasa()}>
      <NasaImageOfTheDay />
    </NasaImageAPIContext.Provider>
  )
}

export default App
