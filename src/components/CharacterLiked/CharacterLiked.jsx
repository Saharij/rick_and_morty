import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Button } from "@mui/material";

import { charactersFromStore } from "../../redux/store";
import { useState } from "react";

export const CharacterLiked = () => {
  const [isOpen, setIsOpen] = useState(false);
  const characters = useSelector(charactersFromStore);
  const likedCharacters = characters.filter(({ like }) => like === true);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  console.log(likedCharacters)

  return (
    <>
      <div style={{ maxWidth: 315 }}>
        <Button
          onClick={handleIsOpen}
          color="error"
          variant="outlined"
        >
          {isOpen
            ? 'Close list of liked characters'
            : 'Open list of liked characters'
          }
        </Button>
        {isOpen && likedCharacters.length >= 1 && (
          <List style={{ backgroundColor: "white" }}>
            {likedCharacters.map(item => (
              <ListItem key={item.id}>
                <ListItemText>
                  {item.name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </>
  );
};
