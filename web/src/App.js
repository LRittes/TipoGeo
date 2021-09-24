import { GlobalStyle, Container } from './GlobalStyle/GlobalStyle'
import { List, Header, Modal } from './components'
import { CountProvider } from './context/Count'

function App() {
    return (
        <CountProvider>
            <Container>
                <Header />
                <List />
            </Container>
            <Modal />
            <GlobalStyle />
        </CountProvider>
    )
}

export default App
