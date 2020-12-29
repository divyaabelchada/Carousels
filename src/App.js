import React, { useRef } from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack, ArrowForwardOutlined } from "@material-ui/icons";
import "./App.css";
import CardDemo from "./CardDemo";
import Carousel from "./Carousel";
import CarouselTwo from "./CarouselTwo";

const useStyles = makeStyles({
  slider_one: {
    display: "flex",
    maxWidth: "60rem",
    overflowY: "auto",
  },
  items_container: {
    display: "flex",
    overflowY: "hidden",
    justifyContent: "center",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  arrows: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});

function App() {
  const classes = useStyles();

  const cardRef = useRef(null);

  const scrollLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      {/* basic slider */}
      <div>
        <Container className={classes.slider_one}>
          <IconButton onClick={scrollLeft} className={classes.arrows}>
            <ArrowBack />
          </IconButton>

          <Container className={classes.items_container} ref={cardRef}>
            <CardDemo />
            <CardDemo />
            <CardDemo />
            <CardDemo />
            <CardDemo />
            <CardDemo />
            <CardDemo />
          </Container>

          <IconButton onClick={scrollRight} className={classes.arrows}>
            <ArrowForwardOutlined />
          </IconButton>
        </Container>
      </div>

      <div className={classes.slick_carousel}>
        <Carousel />
      </div>
      <div className={classes.slick_carousel}>
        <CarouselTwo />
      </div>
    </div>
  );
}

export default App;
