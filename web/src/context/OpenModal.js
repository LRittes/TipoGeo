import { createContext, useContext, useState } from 'react'

export const OpenModalContext = createContext()

export const OpenModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(true)
    return (
        <OpenModalContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </OpenModalContext.Provider>
    )
}

export const useOpenModal = () => {
    const context = useContext(OpenModalContext)
    const { openModal, setOpenModal } = context
    return { openModal, setOpenModal }
}