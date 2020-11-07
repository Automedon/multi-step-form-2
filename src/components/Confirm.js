import React from "react";
import {
  AppBar,
  List,
  ListItem,
  MuiThemeProvider,
  RaisedButton,
} from "material-ui";

const Confirm = ({ nextStep, values, handleChange, prevStep }) => {
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
        <AppBar title={"Confirm User Data"} />
        <List>
          <ListItem
            primaryText={"First Name"}
            secondaryText={values.firstName}
          />
          <ListItem primaryText={"Last Name"} secondaryText={values.lastName} />
          <ListItem primaryText={"Email"} secondaryText={values.email} />
          <ListItem
            primaryText={"Occupation"}
            secondaryText={values.occupation}
          />
          <ListItem primaryText={"City"} secondaryText={values.city} />
          <ListItem primaryText={"Bio"} secondaryText={values.bio} />
        </List>
        <br />
        <RaisedButton
          label={"Back"}
          primary={false}
          style={styles.button}
          onClick={backStep}
        />
        <RaisedButton
          label={"Confirm & Continue"}
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

export default Confirm;
