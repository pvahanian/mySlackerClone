import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// import Register from "./Register.js";
import FormTabs from "./FormTabs";

const FormWrapper = withStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "100vh",
    background: "#cc272f",
  },
})(Box);

const AuthContainer = () => {
  return (
    <FormWrapper>
      <h1 style ={{color: "white", fontSize: "5rem", margin: "0"}}>S&lt;/&gt;ack</h1>
      <h2 style ={{color: "white", fontSize: "1rem", marginBottom: "12%"}}>Come with bugs, leave with friends</h2>
      <FormTabs />
    </FormWrapper>
  );
};

export default AuthContainer;

// #3b2875
