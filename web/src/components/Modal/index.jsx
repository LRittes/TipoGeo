import ReactDOM from 'react-dom'

import { Container, Title, ModalContainer, Btn } from './styles'

const portalModal = document.getElementById('modal')

const Modal = () => {
    return ReactDOM.createPortal(
        <Container>
            <ModalContainer>
                <Title>Está pronto?</Title>
                <Btn>Começar</Btn>
            </ModalContainer>
        </Container>,
        portalModal
    )
}

export default Modal
