import { GlobalStyle, Container } from './GlobalStyle/GlobalStyle'
import { List, Header } from './components'
import { CountProvider } from './context/Count'

function App() {
    return (
        <CountProvider>
            <Container>
                <Header />
                <List />
            </Container>
            <GlobalStyle />
        </CountProvider>
    )
}

export default App
