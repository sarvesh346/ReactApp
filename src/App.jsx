import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React, { useEffect, useState } from "react";
import "./App.css";
import NameAdress from "./nameAdress";
import NameTemplate from "./nameTemplate";
const App = () => {
  const [nationality, setNationality] = useState("");
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [aName, setaName] = useState("");
  const [bName, setbName] = useState("");
  const [gender, setGender] = useState("female");

  useEffect(() => {
    console.log("Sarvesh");
  }, []);

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
        <NameAdress
          nationality={nationality}
          aName={aName}
          bName={bName}
          setNationality={setNationality}
          setaName={setaName}
          setbName={setbName}
        />
        <Box>
          <Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(e)=>setGender(e.target.value)}
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
          <LoginIcon
            onClick={() => {
              console.log("First Name", fName);
              console.log("Middle Name", mName);
              console.log("Last Name", lName);
              console.log("Nationality", nationality);
              console.log("Age", aName);
              console.log("Address", bName);
              console.log("Gender", gender);
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default App;
