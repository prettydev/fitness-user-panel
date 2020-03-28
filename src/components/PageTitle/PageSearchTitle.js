import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Search, InputBase } from "@material-ui/icons";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

import Moment from "react-moment";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers/Wrappers";

export default function PageSearchTitle(props) {
  var classes = useStyles();

  const today = new Date();
  return (
    <div className={classes.pageTitleContainer}>
      <Typography className={classes.typo} variant="h1" size="sm">
        {props.title}
      </Typography>

      <TextField
        label="Buscar"
        variant="filled"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <Search style={{ fill: "white" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {props.date && (
        <h1>
          <Moment format="D MMM YYYY" date={today} />
        </h1>
      )}
    </div>
  );
}
