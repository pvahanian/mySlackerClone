import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
// import { withStyles } from "@material-ui/styles";
import { Tab } from "@material-ui/core";
import Register from "./Register.js";
import Login from "./Login.js";

// const NewTab = withStyles({
//   root: {
//     primary: "black",
//     secondary: "black"
//   }
// })(Tab);

const FormTabs = () => {
  const [tab, setTab] = useState("1");

  const onChange = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <>
      <TabContext value={tab} >
        <TabList onChange={onChange}           TabIndicatorProps={{
            style: {
              backgroundColor: "#f5ea53"
            } }}>
          <Tab label="Sign In" value="1" style={{color: "white"}} />
          <Tab label="Sign Up" value="2" style={{color: "white"}}  />
        </TabList>
        <TabPanel value="1">
          <Login />
        </TabPanel>
        <TabPanel value="2">
          <Register />
        </TabPanel>
      </TabContext>
    </>
  );
};

export default FormTabs;

// indicatorColor="blue"