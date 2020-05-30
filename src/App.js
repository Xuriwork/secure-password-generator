import React from 'react';

import { LanguageProvider } from './context/languageContext';
import HomeContainer from './components/Home/HomeContainer';

import './App.scss';
import './rsuite-default.css';

export const App = () => {
  return (
    <LanguageProvider>
      <HomeContainer />
    </LanguageProvider>
  );
}

export default App;
