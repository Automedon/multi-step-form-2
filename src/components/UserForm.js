import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonData from "./FormPersonData";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [state, setState] = useState({
    step: 1,
    fistName: "",
    lastName: "",
    emailName: "",
    occupation: "",
    city: "",
    bio: "",
  });

  const nextStep = () => {
    setState((state) => {
      return { ...state, step: (state.step += 1) };
    });
  };
  const prevStep = () => {
    setState((state) => {
      return { ...state, step: (state.step -= 1) };
    });
  };

  const handleChange = (input) => (e) => {
    setState((state) => {
      return { ...state, [input]: e.target.value };
    });
  };
  switch (state.step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 2:
      return (
        <FormPersonData
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
          prevStep={prevStep}
        />
      );
    case 3:
      return <Confirm nextStep={nextStep} values={state} prevStep={prevStep} />;
    case 4:
      return <Success></Success>;
    default:
      return <div>You should not see this step</div>;
  }
};

export default UserForm;
