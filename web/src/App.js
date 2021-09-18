import { GlobalStyle, Title, Container } from './GlobalStyle/GlobalStyle';
import { List } from './components'

function App() {
  return(
    <>
      <Container>
        <Title>TipoGeo</Title>
        <List/>
      </Container>
      <GlobalStyle/>
    </>
  );
}

export default App;
