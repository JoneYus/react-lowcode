import React from 'react';
import './App.css';
import { useRoutes } from 'react-router';
import routes from './router';
import './App.css';

function App() {
  return <div className="AppContainer">{useRoutes(routes)}</div>;
}

export default App;
