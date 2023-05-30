import { createContext, useState } from 'react'

export const StatementContext = createContext()
export const StatementProvider = ({ children }) => {
  const [firstCover, setFirstCover] = useState(false)
  const [secondeCover, setSecondeCover] = useState(false)
  return (
    <StatementContext.Provider
      value={{
        firstCover,
        setFirstCover,
        secondeCover,
        setSecondeCover,
      }}
    >
      {children}
    </StatementContext.Provider>
  )
}
