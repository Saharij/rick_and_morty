import { Card, Link, Typography, CardContent } from '@mui/material';
import { format } from 'date-fns'
import './CharacterProfile.scss';

export const CharacterProfile = ({ character }) => {
  let created = new Date();

  if (character) {
    created = new Date(character.created);
  }

  const createdAt = format(created, "do MMMM yyyy")

  return (
    <>
      {character && (
        <Card sx={{ minWidth: 400, maxHeight: 530 }}>
          <div className="character__image">
            <img src={character.image} alt={`Character - ${character.name}`} />
          </div>
          <CardContent sx={{ maxWidth: 300, marginRight: 'auto', marginLeft: 'auto' }}>
            <Typography variant="h5" textAlign="center">
              {character.name}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                Species:
              </span>
              {character.species}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightyellow' }}>
              <span>
                Gender:
              </span>
              {character.gender}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                Link:
              </span>
              <Link href={character.location.url}>
                {character.location.name}
              </Link>
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'lightyellow' }}>
              <span>
                Status:
              </span>
              {character.status}
            </Typography>
            <Typography sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>
                Created:
              </span>
              {createdAt}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
