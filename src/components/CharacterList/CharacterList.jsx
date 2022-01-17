
import { useEffect, useState } from 'react';
import { ListItem, List } from '@mui/material';
import classnames from 'classnames';

import './CharacterList.scss';
import { changeFieldLike } from '../../redux/store';
import { SearchContext } from '../../context/context';
import { useDispatch, useSelector } from 'react-redux';
import { FindCharacter } from '../FindCharacter/FindCharacter';
import { CharacterItem } from '../CharacterItem/CharacterItem';
import { CharacterLiked } from '../CharacterLiked/CharacterLiked';
import { CharacterProfile } from '../CharacterProfile/CharacterProfile';
import { charactersFromStore, fetchCharacters } from '../../redux/store';

export const CharacterList = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const characters = useSelector(charactersFromStore);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  const handleCurrentCharacter = (id) => {
    const curChar = characters.find(item => item.id === id) || null;
    setCurrentCharacter(curChar)
  }

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [])

  const handleLike = (id) => {
    dispatch(changeFieldLike(id));
  };

  const filteredCharacters = characters.filter(item => (
    item.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  ));

  return (
    <>
      <FindCharacter
        changeInputValue={setInputValue}
      />
      <SearchContext.Provider value={inputValue}>
        <div className="container">
          <List sx={{ marginLeft: -2, marginTop: -2 }}>
            {filteredCharacters.map(item => (
              <ListItem key={item.id} onClick={() => {
                handleCurrentCharacter(item.id)
              }}>
                <CharacterItem
                  name={item.name}
                  status={item.status}
                />
                <button
                  className={classnames(
                    item.like
                    ? "button button__liked"
                    : "button button__no-like"
                  )}
                  onClick={() => {
                    handleLike(item.id)
                  }}
                >
                  Like!
                </button>
              </ListItem>
            ))}
          </List>
          <CharacterProfile
            character={currentCharacter}
          />
          <CharacterLiked />
        </div>
      </SearchContext.Provider>
    </>
  );
};
