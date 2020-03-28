import React from "react";
import { Button } from "@material-ui/core";
import Moment from "react-moment";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  const today = new Date();
  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="sm">
        {props.title}
      </Typography>
      {props.button && (
        <Button
          classes={{ root: classes.button }}
          variant="contained"
          size="large"
          color="secondary"
        >
          {props.button}
        </Button>
      )}
      {props.date && (
        <h1>
          <Moment format="D MMM YYYY" date={today} />
        </h1>
      )}
    </div>
  );
}
