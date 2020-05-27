import React from 'react';
import RotationList from './RotationList';
import TriageHistory from './TriageHistory';
import './app.css';

const App = () => {
  const redHatters = [
    {name: 'Jeremy'},
    {name: 'Toledo'},
    {name: 'Jonathon'},
  ]

  return (
    <div className="app-container">
      <TriageHistory redHatters={redHatters} />
      <br />
      <RotationList redHatters={redHatters} />
    </div>
  );
}

export default App;
