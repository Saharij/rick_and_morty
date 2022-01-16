import { Container } from '@material-ui/core';

import './App.css';
import { FindCharacter } from './components/FindCharacter/FindCharacter';
import { CharacterList } from './components/CharacterList/CharacterList';
import { CharacterProfile } from './components/CharacterProfile/CharacterProfile';

function App() {
  return (
    <Container>
      <FindCharacter />
      <CharacterList />
      <CharacterProfile />
    </Container>
  );
}

export default App;
