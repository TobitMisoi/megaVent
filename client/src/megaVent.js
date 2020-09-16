import React from 'react';
import Home from './Components/Pages/Home'
import { Data } from './utils/Data';

function App() {
  return (
    <>
      <Home {...Data} />
    </>
  );
}

export default App;
