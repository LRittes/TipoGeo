import ReactDOM from 'react-dom'
import { useOpenModal } from '../../context/OpenModal'

import { Container, Title, ModalContainer, Btn } from './styles'

const portalModal = document.getElementById('portal-modal')

const Modal = ({title, titleBtn}) => {
    const {setOpenModal} = useOpenModal()
    return (
        ReactDOM.createPortal(
            <Container>
                <ModalContainer>
                    <Title>{title}</Title>
                    <Btn onClick={() => setOpenModal(false)}>{titleBtn}</Btn>
                </ModalContainer>
            </Container>,
            portalModal
        )
    )
}

export default Modal
