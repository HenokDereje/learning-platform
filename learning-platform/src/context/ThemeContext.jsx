import { createContext, useContext } from 'react'

const ThemeContext = createContext({})

function ThemeProvider({ children }) {
    return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    return useContext(ThemeContext)
}

export default ThemeProvider
