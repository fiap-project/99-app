import { ReactElement, createContext, useCallback, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  user?: any
  isAuthenticated: boolean
  onLogout: (calback?: () => void) => void
  onAuthenticate: (token: string, user: any, callback?: () => void) => void
}

type AuthProviderType = {
  children: ReactElement
}

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isAuthenticated: false,
  onLogout: () => null,
  onAuthenticate: () => null,
})

export default function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<any>(undefined)

  const onAuthenticate = useCallback((token: string, user: any, callback?: any) => {
    setUser(user)
    localStorage.setItem('token', token)
    callback?.()
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    if (token && storedUser) {
      onAuthenticate(token, JSON.parse(storedUser))
    }
  }, [onAuthenticate])

  const onLogout = useCallback((callback?: any) => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    callback?.()
  }, [])

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, onAuthenticate, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}
