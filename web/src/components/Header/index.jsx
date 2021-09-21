import { Title, Container, ScoreC, SubTitle } from './styles'

const Header = () => {
    return (
        <Container>
            <Title>TipoGeo</Title>
            <ScoreC>
                <SubTitle>Paises: 90/197</SubTitle>
                <SubTitle>Tempo: 15:00</SubTitle>
            </ScoreC>
        </Container>
    )
}

export default Header
