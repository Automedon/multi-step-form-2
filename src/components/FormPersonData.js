import React from "react";
import { AppBar, MuiThemeProvider, RaisedButton, TextField } from "material-ui";

const FormPersonData = ({ nextStep, values, handleChange, prevStep }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backStep = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <AppBar title={"Enter User Details"} />

        <TextField
          style={{ width: "90%" }}
          hintText={"Enter Your Occupation"}
          floatingLabelText={"Occupation"}
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          style={{ width: "90%" }}
          hintText={"Enter Your City"}
          floatingLabelText={"City"}
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          style={{ width: "90%" }}
          fullWidth
          hintText={"Enter Your Bio"}
          floatingLabelText={"Bio"}
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label={"Back"}
          primary={false}
          style={styles.button}
          onClick={backStep}
        />
        <RaisedButton
          label={"Continue"}
          primary
          style={styles.button}
          onClick={continueStep}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonData;
