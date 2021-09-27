import ReactDOM from 'react-dom'
import { useOpenModal } from '../../context/OpenModal'

import { Container, Title, ModalContainer, Btn } from './styles'

const portalModal = document.getElementById('modal')

const Modal = () => {
    const {setOpenModal} = useOpenModal()
    return (
        ReactDOM.createPortal(
            <Container>
                <ModalContainer>
                    <Title>Está pronto?</Title>
                    <Btn onClick={() => setOpenModal(false)}>Começar</Btn>
                </ModalContainer>
            </Container>,
            portalModal
        )
    )
}

export default Modal
