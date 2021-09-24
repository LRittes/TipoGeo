import { Title, Container, ScoreC, SubTitle } from './styles'
import { useCount } from '../../context/Count'

import { Timer } from '../Timer'

const Header = () => {
    const { count } = useCount()
    return (
        <Container>
            <Title>TipoGeo</Title>
            <ScoreC>
                <SubTitle>Paises: {count}/197</SubTitle>
                <SubTitle>Tempo: {Timer()}</SubTitle>
            </ScoreC>
        </Container>
    )
}

export default Header
