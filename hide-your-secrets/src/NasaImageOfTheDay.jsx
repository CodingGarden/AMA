import { useContext, useEffect } from 'react'
import NasaImageAPIContext from './NasaImageAPIContext';

function NasaImageOfTheDay() {
  const { state, getData } = useContext(NasaImageAPIContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {state.loading && <h1>Loading...</h1>}
      {state.data &&
        <img src={state.data.url} alt={state.data.title} />
      }
    </div>
  )
}

export default NasaImageOfTheDay
