import { createContext, useState } from 'react'

export const StatementContext = createContext()
export const StatementProvider = ({ children }) => {
  const [firstCover, setFirstCover] = useState(false)
  const [secondeCover, setSecondeCover] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  return (
    <StatementContext.Provider
      value={{
        firstCover,
        setFirstCover,
        secondeCover,
        setSecondeCover,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StatementContext.Provider>
  )
}
