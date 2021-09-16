import { Button, TextField } from "@material-ui/core";
import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";
import currentUser from "../../store/currentUser";

export const Login: FC = () => {
  const classes = useStyles();

  const [userName, setUserName] = useState<string>("");

  const changeNameInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const changeCurrentUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    currentUser.changeCurrentUser(userName);
  };

  return (
    <form className={classes.loginForm} onSubmit={changeCurrentUser}>
      <TextField
        variant="outlined"
        label="Enter your name"
        value={userName}
        onChange={changeNameInputValue}
      />
      <Button
        type={"submit"}
        variant={"contained"}
        className={classes.loginBtn}
      >
        Send
      </Button>
    </form>
  );
};

const useStyles = makeStyles(() => ({
  loginForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
    backgroundColor: "whitesmoke",
    borderRadius: "20px",
  },
  loginBtn: {
    marginLeft: "10px",
    height: "54px",
    backgroundColor: "rgb(255, 213, 27)",
    "&:hover": {
      backgroundColor: "rgb(172, 141, 2)",
    },
  },
}));
