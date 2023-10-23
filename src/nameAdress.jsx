import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const NameAdress = (props) => {
  const { nationality, aName, bName, setNationality, setaName, setbName } =
    props;
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
        type="number"
        label="Age"
        value={aName}
        onChange={(e) => setaName(e.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-multiline-static"
        label="Address"
        value={bName}
        onChange={(e) => setbName(e.target.value)}
        multiline
        rows={4}
      />
      <Box>
        <FormControl style={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={nationality}
            label="Nationality"
            onChange={(e) => setNationality(e.target.value)}
          >
            <MenuItem value={"India"}>India</MenuItem>
            <MenuItem value={"Pakistan"}>Pak</MenuItem>
            <MenuItem value={"Srilanka"}>Srilanka</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default NameAdress;
