import React from "react";
import { AppBar, MuiThemeProvider, RaisedButton, TextField } from "material-ui";

const FormUserDetails = ({ nextStep, values, handleChange }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <AppBar title={"Enter User Details"} />

        <TextField
          style={{ width: "90%" }}
          hintText={"Enter Your First Name"}
          floatingLabelText={"First Name"}
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          style={{ width: "90%" }}
          hintText={"Enter Your Last Name"}
          floatingLabelText={"Last Name"}
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          style={{ width: "90%" }}
          fullWidth
          hintText={"Enter Your Email"}
          floatingLabelText={"Email"}
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
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

export default FormUserDetails;
