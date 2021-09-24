import { createContext, useContext, useState } from 'react'

export const CountContext = createContext()

export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export const useCount = () => {
    const context = useContext(CountContext)
    const { count, setCount } = context
    return { count, setCount }
}