import { GlobalStyle, Container } from './GlobalStyle/GlobalStyle'
import { List, Header } from './components'

function App() {
    return (
        <>
            <Container>
                <Header />
                <List />
            </Container>
            <GlobalStyle />
        </>
    )
}

export default App
