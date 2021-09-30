import {FaRegClock} from 'react-icons/fa'
import { useCount } from '../../context/Count'
import { useOpenModal } from '../../context/OpenModal'

import { Title, Container, ScoreC, SubTitle } from './styles'

import { Timer } from '../Timer'
import Modal from '../Modal'

const Header = () => {
    const { count } = useCount()
    const {openModal} = useOpenModal()
    return (
        <Container>
            <Title>TipoGeo</Title>
            <ScoreC>
                <SubTitle>Paises: {count}/197</SubTitle>
                <SubTitle> <FaRegClock/> Tempo: {openModal ? '--:--': Timer(count)}</SubTitle>
            </ScoreC>
            {openModal && <Modal />}
        </Container>
    )
}

export default Header
