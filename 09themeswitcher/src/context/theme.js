import { useContext, createContext } from "react";

// first we create the context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=> {},
    lightTheme: ()=> {},
})

// then we wrap it around the context provider
export const ThemeProvider = ThemeContext.Provider

// and then we consume the context
export default function useTheme(){
    return useContext(ThemeContext)
}