import React from "react";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import HeroImg from "./HeroImg";
import AuthContainer from "./AuthContainer";

const HomeWrapper = withStyles({
  root: {
    display: "flex",
    alignItems: "center"
  }
})(Box);

const Home = () => {
  return (
    <HomeWrapper>
      <HeroImg />
      <AuthContainer />
    </HomeWrapper>
  );
};

export default Home;
