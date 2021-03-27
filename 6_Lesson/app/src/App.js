import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Contacts from './modules/contacts/components/Contacts';
import { lightTheme, darkTheme } from './modules/styles/theme';
import { GlobalStyles } from './modules/styles/global';

export default function App() {
  const [ theme, setTheme ] = useState('light'); //Сделал по дефолту тему лайт, но если нужно то можно записывать выбранное юзером значение в локал сторейдж. Вроде по ТЗ не было)
  const toggleTheme = () => {
    if (theme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
  }
  return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <>
              <GlobalStyles />
              <button onClick={toggleTheme} className='toggle_theme'>Toggle theme</button>
              <Contacts />
          </>
      </ThemeProvider>
  );
}
