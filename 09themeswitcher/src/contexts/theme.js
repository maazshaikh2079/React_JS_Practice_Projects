import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: 'light',
    changeToDarkMode: () => {},
    changeToLightMode: () => {},
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
