import { createContext, useState } from 'react'
export const themeContext = createContext(null)
export function useThemeContext() {
    const [theme, setTheme] = useState('light')
    const handleChange = () => theme === 'light' ? setTheme('dark') : setTheme('light');
    const contextValue = { theme, handleChange }
    return { contextValue }
};