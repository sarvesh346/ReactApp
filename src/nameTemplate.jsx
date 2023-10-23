import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NameTemplate = (props) => {
  const { fName, mName, lName, setfName, setlName, setmName } = props;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      className="nationalityBlock"
    >
      <TextField
        id="outlined-basic"
        value={fName}
        onChange={(e) => setfName(e.target.value)}
        label="First name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        value={mName}
        onChange={(e) => setmName(e.target.value)}
        label="Middle name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        value={lName}
        onChange={(e) => setlName(e.target.value)}
        label="Last name"
        variant="outlined"
      />
    </Box>
  );
};

export default NameTemplate;
