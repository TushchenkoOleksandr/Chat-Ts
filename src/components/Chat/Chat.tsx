import { Box } from "@material-ui/core";
import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { SendMessageForm } from "./SendMessageForm/SendMessageForm";
import { MessageList } from "./MessageList/MessageList";

export const Chat: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.chat}>
      <MessageList />
      <SendMessageForm />
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  chat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2%",
    width: "70vw",
    height: "90vh",
    background: "whitesmoke",
    borderRadius: "1%",
  },
}));
