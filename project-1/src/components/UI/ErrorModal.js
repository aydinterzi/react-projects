import React from "react";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
