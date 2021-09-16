import React, { FC, useEffect, useRef } from "react";
import { Box } from "@material-ui/core";
import { autorun } from "mobx";
import { makeStyles } from "@material-ui/core";
import { Message } from "./Message/Message";
import messages from "../../../store/messages";
import { IMessage } from "../../../types/types";
import { observer } from "mobx-react-lite";
import { horisontalLine } from '../../../constants/constants';

export const MessageList: FC = observer(() => {

  const classes = useStyles();
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    autorun(() => {
      scrollToBottom();
    });
  });

  return (
    <Box className={classes.messageList}>
      {messages.messages.map((message: IMessage) => (
        message.sendler !== horisontalLine
        ? <Message key={message.id} message={message} />
        : <hr key={message.id} />
      ))}
      <div ref={messagesEndRef} />
    </Box>
  );
})

const useStyles = makeStyles(() => ({
  messageList: {
    height: "calc(100% - 120px)",
    backgroundColor: "rgb(111, 11, 168)",
    borderRadius: "20px",
    overflow: "scroll",
  },
}));
