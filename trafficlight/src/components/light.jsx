import React from "react";

import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  light: {
    backgroundColor: "black",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
}));

export default function Light(props) {
  const classes = useStyles();

  const light = props.light;

  return (
    <Container
      className={classes.light}
      style={{ backgroundColor: light }}
    ></Container>
  );
}
