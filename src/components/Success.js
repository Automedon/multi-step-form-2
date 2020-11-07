import React from "react";
import { AppBar, MuiThemeProvider } from "material-ui";

const Success = () => {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title={"Success"} />
        <h1>Thank you for you submission</h1>
        <p>You will get email with further instructions</p>
      </>
    </MuiThemeProvider>
  );
};

export default Success;
