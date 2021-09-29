import ReactDOM from 'react-dom'
import { useOpenModal } from '../../context/OpenModal'

import { Container, Title, ModalContainer, SubTitle,Btn } from './styles'

const portalModal = document.getElementById('portal-modal')

const Modal = () => {
    const {setOpenModal, titleModal} = useOpenModal()
    return (
        ReactDOM.createPortal(
            <Container>
                <ModalContainer>
                    <Title>{titleModal.title}</Title>
                    {titleModal.answer != null && 
                        <SubTitle>Você acertou <span>{titleModal.answer}</span> capitais</SubTitle>
                    }
                    <Btn onClick={() => setOpenModal(false)}>{titleModal.titleBtn}</Btn>
                </ModalContainer>
            </Container>,
            portalModal
        )
    )
}

export default Modal
