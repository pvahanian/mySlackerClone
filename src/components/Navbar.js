import React from "react";
import {Link, useHistory} from 'react-router-dom'

import { AppBar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import CodeIcon from "@material-ui/icons/Code";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import fireApp from '../base'

const auth = fireApp.auth()

const useStyles = makeStyles({  
      linkText: {
      textDecoration: `none`,
      color: `white`
    },
    appBarClass:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width: `calc(100% - 240px)`,
    }
  });

const navBarLinks = [
  { title: "Current Channel", path: "/homepage" },
];

const NavBar = () => {
    const history = useHistory()
    const classes = useStyles()
  return (
    <>
    <AppBar  className={classes.appBarClass}>
        <Link href={navBarLinks[0].path} key={navBarLinks[0].title} >
            <IconButton color="inherit" className={classes.linkText}>
                <CodeIcon fontSize="medium" />
                {navBarLinks[0].title}
            </IconButton>
        </Link>
      
        <IconButton color="inherit" className={classes.linkText} onClick={() =>{
              auth.signOut()
              history.push('/')
            }
            }>
            <ExitToAppIcon fontSize="medium" />
          Logout           
        </IconButton>
    </AppBar>
    </>
  );
};

export default NavBar;
