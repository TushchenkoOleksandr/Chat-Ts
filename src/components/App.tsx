import { Box, makeStyles } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { FC } from "react";
import currentUser from "../store/currentUser";
import { Login } from "./Login/Login";
import { Chat } from "./Chat/Chat";
import newMessageIndicator from "../store/newMessageIndicator";
import mesaages from "../store/messages";

export const App: FC = observer(() => {
  const classes = useStyles();

  const removeNewMessageIndicator = () => {
    newMessageIndicator.setIsNewMessageIndicatorExist(false);
    mesaages.removeNewMessageIndicator();
  };

  return (
    <Box className={classes.chatWraper} onClick={removeNewMessageIndicator}>
      {currentUser.name ? <Chat /> : <Login />}
    </Box>
  );
});

const useStyles = makeStyles(() => ({
  chatWraper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "grey",
  },
}));
