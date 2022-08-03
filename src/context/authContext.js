import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)

    const logout = () => {
        setAuthenticated(false)
    }
    const login = () => {
        setAuthenticated(true)
    }
    return (
        <AuthContext.Provider value={{ authenticated, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}