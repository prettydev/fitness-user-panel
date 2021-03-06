import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import classnames from "classnames";

// styles
var useStyles = makeStyles(theme => ({
  dotBase: {
    width: 24,
    height: 8,
    backgroundColor: theme.palette.text.hint,
    borderRadius: "20%",
    transition: theme.transitions.create("background-color"),
  },
  dotSmall: {
    width: 15,
    height: 5,
  },
  dotLarge: {
    width: 33,
    height: 11,
  },
}));

export default function Dot({ size, color }) {
  var classes = useStyles();
  var theme = useTheme();

  return (
    <div
      className={classnames(classes.dotBase, {
        [classes.dotLarge]: size === "large",
        [classes.dotSmall]: size === "small",
      })}
      style={{
        backgroundColor: color,
        // color && theme.palette[color] && theme.palette[color].main,
      }}
    />
  );
}
