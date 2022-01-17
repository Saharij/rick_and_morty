import { TextField } from "@mui/material";

export const FindCharacter = ({ changeInputValue }) => {
  const inputChange = (event) => {
    changeInputValue(event.target.value);
  }

  return (
    <>
      <TextField
        sx={{ width: 460 }}
        onChange={inputChange}
        placeholder="Search character"
      >
      </TextField>
    </>
  );
};
