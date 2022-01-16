
import { useEffect, useState } from 'react';
import { ListItem, List } from '@mui/material';

import './CharacterList.scss';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import { charactersFromStore, fetchCharacters } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const CharacterList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersFromStore);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const handleCurrentCharacter = (id) => {
    const curChar = characters.find(item => item.id === id) || null;
    setCurrentCharacter(curChar)
  }

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [])

  return (
    <>
      <List sx={{ marginLeft: -2 }}>
        {characters.map(item => (
          <ListItem key={item.id} onClick={() => {
            handleCurrentCharacter(item.id)
          }}>
            <CharacterItem
              id={item.id}
              name={item.name}
              status={item.status}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
