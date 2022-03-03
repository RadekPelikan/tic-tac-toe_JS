import './css/App.css';
import React, { useState } from 'react';
import Board from './components/Board';

function App() {
  const [size, setSize] = useState(3)
  return (
    <div id="App">
      <Board size={size} />
    </div>
  );
}

export default App;
