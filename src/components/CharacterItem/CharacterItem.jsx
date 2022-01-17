import { Card, ListItemText } from '@mui/material';

import { Hightlight } from '../Hightlight/Hightlight';

export const  CharacterItem = ({ name, status }) => {
  return (
    <Card sx={{ minWidth: 460, display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ marginLeft: 10 }}>
        <ListItemText>
          <span>
            {`Name: `}
          </span>
          <Hightlight
            string={name}
          />
        </ListItemText>
        <ListItemText>
          {`Status: ${status}`}
        </ListItemText>
      </div>
    </Card>
  );
};
