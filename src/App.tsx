import React, { useEffect } from 'react';
import randomApiServices from './Services/RandomApiSerivce';

function App() {
  useEffect(() => {
    randomApiServices.getUsersList({ results: 100 }).then((res) => {
      console.log(res.data.results);
    });
  }, []);
  return <div>test http service</div>;
}

export default App;
