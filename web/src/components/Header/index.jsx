import { Title, Container, ScoreC, SubTitle } from './styles'
import { useCount } from '../../context/Count'

import { Timer } from '../Timer'
import { useOpenModal } from '../../context/OpenModal'
import { Modal } from '..'

const Header = () => {
    const { count } = useCount()
    const {openModal} = useOpenModal()
    console.log(openModal)
    return (
        <Container>
            <Title>TipoGeo</Title>
            <ScoreC>
                <SubTitle>Paises: {count}/197</SubTitle>
                <SubTitle>Tempo: {openModal ? '--:--': Timer()}</SubTitle>
            </ScoreC>
            {openModal && <Modal/>}
        </Container>
    )
}

export default Header
