import { Title, Container, ScoreC, SubTitle } from './styles'
import { useCount } from '../../context/Count'

const Header = () => {
    const { count } = useCount()
    return (
        <Container>
            <Title>TipoGeo</Title>
            <ScoreC>
                <SubTitle>Paises: {count}/197</SubTitle>
                <SubTitle>Tempo: 15:00</SubTitle>
            </ScoreC>
        </Container>
    )
}

export default Header
