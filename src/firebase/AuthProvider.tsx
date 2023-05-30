import React from "react";

type AuthContextType = {
  user: null | string
}

export const AuthContext = React.createContext({} as AuthContextType)

export const AuthProvider = () => {
  const [user, setUser] = React.useState('')



  const value = { user }
  return (
    <AuthContext.Provider value={value}>

    </AuthContext.Provider>
  )
}

export const useAuth = () => React.useContext(AuthContext)