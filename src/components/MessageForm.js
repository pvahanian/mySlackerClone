import React, {useContext} from "react";
import { AuthContext } from "./Auth"

import 'firebase/firestore'
import firebase from 'firebase/app';
import { makeStyles} from "@material-ui/core/styles";

import Paper from '@material-ui/core/Paper';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';


import fireApp from '../base.js'
const firestore = fireApp.firestore();


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width: "6%"
      },
  paper: {
    display: 'flex',
    flexDirection:"row",
    justifyContent:'flex-start',
    border: `1px solid ${theme.palette.divider}`,
    flexWrap: 'wrap',
  },
  root: {
    "& .MuiTextField-root": {
      display:'flex',
      margin: theme.spacing(.5),
      width: "43%"
    }
  }
}));

export default function MessageForm() {
  const messagesRef = firestore.collection('messages');
  const {currentUser} = useContext(AuthContext)
  const classes = useStyles();
  const [formValue, setFormValue] = React.useState("");

  const handleSendMsg = async (e) =>{
    e.preventDefault()

    const {uid, photoURL} = currentUser

    await messagesRef.add({
      text:formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
  }
  
  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.keyCode === 13) {
    handleSendMsg();
  }
};

  const tempName = "Message";

  return (
    <>
    <form className={classes.root} autoComplete="off" onSubmit={handleSendMsg} >
      <Paper elevation={0} className={classes.paper}>
        <TextField
          id="outlined-multiline-static"
          label={`Send a ${tempName}`}
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          onKeyPress={handleKeypress}
          rows={2}
          variant="outlined"
        />      
        <Button type="submit" disabled={!formValue} variant="contained" color="primary"className={classes.button}>Send<SendIcon/></Button>
      </Paper>
     </form>
    </>
  );
}