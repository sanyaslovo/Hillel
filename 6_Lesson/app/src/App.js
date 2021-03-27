import { useState } from 'react';
import { themeContext } from './contexts/themeContext';
import Contacts from './modules/contacts/components/Contacts';
import './App.css';

function App() {
  const [ theme, setTheme ] = useState('lite');
  console.log(theme)
  return (
      <themeContext.Provider value={setTheme}>
        <Contacts />
      </themeContext.Provider>
  );
}

export default App;
