import { GlobalStyle, Container } from './GlobalStyle/GlobalStyle'
import { List, Header} from './components'
import { CountProvider } from './context/Count'
import { OpenModalProvider } from './context/OpenModal'

function App() {
    return (
        <OpenModalProvider>
            <CountProvider>
                <Container>
                    <Header/>
                    <List />
                </Container>
                <GlobalStyle />
            </CountProvider>
        </OpenModalProvider>
    )
}

export default App
