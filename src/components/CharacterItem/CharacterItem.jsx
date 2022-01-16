import { Card, ListItemText } from '@mui/material';
import classnames from 'classnames';
import { useState } from 'react';

import './CharacterItem.scss';
let likes = [];

export const  CharacterItem = ({ id, name, status }) => {

  const [liked, setLiked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLike = (id) => {
    if (likes.includes(id)){
      likes = likes.filter(item => item.id !== id)
    }else {
      likes.push({ id, name})
    }

    setLiked(!liked);
  };

  const isOpenHendler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card sx={{ width: '100%', maxWidth: 560, display: 'flex', justifyContent: 'space-between' }}>
      <div className="text-fields">
        <ListItemText>
          {`Name: ${name}`}
        </ListItemText>
        <ListItemText>
          {`Status: ${status}`}
        </ListItemText>
      </div>
      <div className="button-container">
        <button
          className={classnames(liked ? "button__liked" : "button__no-like")}

          onClick={() => {
            handleLike(id)
          }}
        >
          Like!
        </button>
        <button
          className={classnames(isOpen ? "button__close" : "button__open")}
          onClick={isOpenHendler}
        >
          {isOpen ? "Close!" : "Open!"}
        </button>
      </div>
    </Card>
  );
};
