import React, { FC, useEffect, useState } from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { io } from "socket.io-client";
import { IMessage } from "../../../types/types";
import currentUser from "../../../store/currentUser";
import messages from "../../../store/messages";
import newMessageIndicator from '../../../store/newMessageIndicator'
import { horisontalLine } from '../../../constants/constants';

export const SendMessageForm: FC = () => {
  const SERVER_URL: string = "http://localhost:4000";
  const socket = io(SERVER_URL);
  const classes = useStyles();

  const [newMessage, setNewMessage] = useState<string>("");

  const changeNewMessageInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewMessage(event.target.value);
  };

  const sendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newMessage) {
      socket.emit("chat message", {
        id: Math.random(),
        sendler: currentUser.name,
        messageText: newMessage
      });
      setNewMessage("");
    }
  };

  useEffect(() => {
    socket.on("chat message", function (message: IMessage) {
      if (
        message.sendler !== currentUser.name &&
        !newMessageIndicator.isNewMessageIndicatorExist
      ) {
        messages.addMessage({
          id: Math.random(),
          sendler: horisontalLine,
          messageText: horisontalLine
        });
        newMessageIndicator.setIsNewMessageIndicatorExist(true);
      }
      messages.addMessage(message);
    });
  }, []);

  return (
    <form className={classes.sendMessageForm} onSubmit={sendMessage}>
      <TextField
        className={classes.sendMessageInput}
        variant="outlined"
        label="Enter your message"
        value={newMessage}
        onChange={changeNewMessageInputValue}
      />
      <Button
        type={"submit"}
        variant={"contained"}
        className={classes.sendMessageBtn}
      >
        Send
      </Button>
    </form>
  );
};

const useStyles = makeStyles(() => ({
  sendMessageForm: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    height: "100px",
    background: "rgb(111, 11, 168)",
    borderRadius: "20px",
  },
  sendMessageInput: {
    width: "100%",
    background: "white",
    borderRadius: "10px",
  },
  sendMessageBtn: {
    marginLeft: "10px",
    height: "54px",
    backgroundColor: "rgb(255, 213, 27)",
    "&:hover": {
      backgroundColor: "rgb(172, 141, 2)",
    },
  },
}));
