import React from 'react';

import Header from './components/Header';
import Card from './objects/Card';

import Player from './objects/Player';

function App() {
  return (
    <>
      <Header/>
      <Card />
      <Player player="x"/>
      <Player player="o"/>
    </>
  );
}

export default App;
