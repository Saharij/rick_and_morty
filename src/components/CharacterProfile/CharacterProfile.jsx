import { useState } from 'react';
import './CharacterProfile.scss';

export const CharacterProfile = () => {
  const [currentCharacter, setCurrentCharacter] = useState(null);

  return (
    <>
    {currentCharacter && (
      <h1>
        Hello
      </h1>
    )}
    </>
  );
};
