import { createContext, useContext, useEffect, useState } from 'react'

// Create context
const CookiesContext = createContext({
  userAcceptedCookies: false,
  setUserAcceptedCookies: (userAcceptedCookies: boolean) => {},
})

// Create a provider hook to manage state and provide cookies context
function useProvideCookies() {
  const [userAcceptedCookies, setUserAcceptedCookies] = useState(false)

  useEffect(() => {
    setUserAcceptedCookies(localStorage.getItem('user-accepted-cookies') === 'true')
  }, [])

  return {
    userAcceptedCookies,
    setUserAcceptedCookies,
  }
}

// Wrap the app with this provider to make cookies data available anywhere in the app
export function CookiesProvider({ children }: { children: React.ReactNode }) {
  const cookies = useProvideCookies()
  return <CookiesContext.Provider value={cookies}>{children}</CookiesContext.Provider>
}

// Custom hook to use the cookies context
export function useCookies() {
  return useContext(CookiesContext)
}
