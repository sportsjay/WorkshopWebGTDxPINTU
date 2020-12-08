import React, { useState } from "react";

import { Box, Container, makeStyles } from "@material-ui/core";

import Light from "../components/light";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  trafficlight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "grey",
    height: "80vh",
    width: "40vh",
    borderRadius: 20,
  },
}));

export default function TrafficLight() {
  const classes = useStyles();

  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");

  return (
    <Container className={classes.root}>
      <Box className={classes.trafficlight}>
        <div
          onClick={() => {
            if (
              !(color1 === "black" && color2 === "black" && color3 === "black")
            ) {
              setColor1("black");
            } else {
              setColor1("red");
            }
          }}
        >
          <Light light={color1} />
        </div>
        <div
          onClick={() => {
            if (
              !(color1 === "black" && color2 === "black" && color3 === "black")
            ) {
              setColor2("black");
            } else {
              setColor2("yellow");
            }
          }}
        >
          <Light light={color2} />
        </div>
        <div
          onClick={() => {
            if (
              !(color1 === "black" && color2 === "black" && color3 === "black")
            ) {
              setColor3("black");
            } else {
              setColor3("green");
            }
          }}
        >
          <Light light={color3} />
        </div>
      </Box>
    </Container>
  );
}
