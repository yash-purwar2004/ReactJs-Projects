import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider
// ThemeProvider is a component that allows consuming components to subscribe to the ThemeContext.
// It is used to wrap parts of the app where the context needs to be accessible.



export default function useTheme(){
    return useContext(ThemeContext)
}

// useTheme is a custom hook that simplifies the use of ThemeContext.
// It uses the useContext hook to access the current value of ThemeContext.
// When you call useTheme(), it returns the current context value, which includes themeMode, darkTheme, and lightTheme.