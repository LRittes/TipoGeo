import { createContext, useContext, useState } from 'react'

export const OpenModalContext = createContext()

export const OpenModalProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(true)
    const [titleModal, setTitleModal] = useState({title:'Está pronto?', titleBtn: 'Começar', answer: null})
    return (
        <OpenModalContext.Provider value={{ openModal, setOpenModal, titleModal, setTitleModal }}>
            {children}
        </OpenModalContext.Provider>
    )
}

export const useOpenModal = () => {
    const context = useContext(OpenModalContext)
    const { openModal, setOpenModal, titleModal, setTitleModal } = context
    return { openModal, setOpenModal, titleModal, setTitleModal }
}