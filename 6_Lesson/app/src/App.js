import Contacts from './modules/contacts/components/Contacts';
import { themeContext, useThemeContext } from "./themes/themeContext";
import './App.css';

export default function App() {
    const UserContext = themeContext;
    const { contextValue } = useThemeContext();
    return (
        <UserContext.Provider value={contextValue}>
            <Contacts theme={contextValue.theme}/>
        </UserContext.Provider>
    );
}
