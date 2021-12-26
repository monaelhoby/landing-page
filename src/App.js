import React from 'react';
import Navigation from './routes/Navigation';
import ThemeApp from './theme/ThemeApp';
import 'bootstrap/dist/css/bootstrap.min.css';


import './style.css'

function App() {
  return (
    <ThemeApp>
      <Navigation />
    </ThemeApp>
  );
}

export default App;
