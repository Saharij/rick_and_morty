import { Container } from '@material-ui/core';

import './App.css';
import { CharacterList } from './components/CharacterList/CharacterList';

function App() {
  return (
    <Container style={{ minWidth: 1500 }}>
        <CharacterList />
    </Container>
  );
}

export default App;
