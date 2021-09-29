import ReactDOM from 'react-dom'
import { useCount } from '../../context/Count'
import { useOpenModal } from '../../context/OpenModal'

import { Container, Title, ModalContainer, SubTitle,Btn } from './styles'

const portalModal = document.getElementById('portal-modal')

const Modal = () => {
    const {setOpenModal, titleModal} = useOpenModal()
    const {setCount} = useCount()
    return (
        ReactDOM.createPortal(
            <Container>
                <ModalContainer>
                    <Title>{titleModal.title}</Title>
                    {titleModal.answer != null && 
                        <SubTitle>Você acertou <span>{titleModal.answer}</span> capitais</SubTitle>
                    }
                    <Btn onClick={() => (
                        ( setOpenModal(false), setCount(0))
                        ) 
                    }>
                            {titleModal.titleBtn}
                    </Btn>
                </ModalContainer>
            </Container>,
            portalModal
        )
    )
}

export default Modal
