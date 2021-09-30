import { GlobalStyle, Container } from './GlobalStyle/GlobalStyle'
import { List, Header, Footer} from './components'
import { CountProvider } from './context/Count'
import { OpenModalProvider } from './context/OpenModal'

import './services/firebase'

function App() {
    return (
        <OpenModalProvider>
            <CountProvider>
                <Container>
                    <Header/>
                    <List />
                    <Footer/>
                </Container>
                <GlobalStyle />
            </CountProvider>
        </OpenModalProvider>
    )
}

export default App
