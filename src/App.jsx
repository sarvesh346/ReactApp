import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import NameTemplate from "./nameTemplate";
const App = () => {
  const [nationality, setNationality] = React.useState("");
  const [fName, setfName] = React.useState("");
  const [mName, setmName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [aName, setaName] = React.useState("");
  const [bName, setbName] = React.useState("");
  return (
    <div className="outerBox">
      <div className="container">
        <h2 className="heading">Login</h2>
        <NameTemplate
          fName={fName}
          setfName={setfName}
          mName={mName}
          setmName={setmName}
          lName={lName}
          setlName={setlName}
        />
        <Box>
          <Box>
            <TextField
              id="outlined-basic"
              type="number"
              label="Age"
              value={aName}
              onChange={(e) => setaName(e.target.value)}
              variant="outlined"
            />
          </Box>
          <Box className="a1">
            <TextField
              id="outlined-multiline-static"
              label="Address"
              value={bName}
              onChange={(e) => setbName(e.target.value)}
              multiline
              rows={4}
            />
          </Box>
          <Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Box>
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
          <LoginIcon
            onClick={() => {
              console.log("First Name", fName);
              console.log("Middle Name", mName);
              console.log("Last Name", lName);
              console.log("Nationality", nationality);
              console.log("Age", aName);
              console.log("Address", bName);
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default App;
