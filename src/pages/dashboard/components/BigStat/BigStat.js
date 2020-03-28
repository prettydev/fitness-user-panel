import React, { useState } from "react";
import { Grid, Select, MenuItem, Input } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { BarChart, Bar } from "recharts";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Widget from "../../../../components/Widget";
import { Typography } from "../../../../components/Wrappers";

import { colors } from "../../../../style";

export default function BigStat(props) {
  var { product, total, color, registrations, bounce } = props;
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [value, setValue] = useState("daily");

  return (
    <Widget
      header={
        <div className={classes.title}>
          <Typography variant="h5">{product}</Typography>
        </div>
      }
      upperTitle
      style={{
        background: colors.globalWdColor,
      }}
    >
      <div className={classes.totalValueContainer}>
        <div display="flex" flexDirection="column">
          <Typography size="xxl" color="text" colorBrightness="secondary">
            {total[value]}
          </Typography>
          <Typography
            variant="caption"
            color={total.percent.profit ? "success" : "secondary"}
          >
            &nbsp;
            {total.percent.profit ? (
              <font color="green">↑{total.percent.value}%</font>
            ) : (
              <font color="red">↓{total.percent.value}%</font>
            )}
          </Typography>
        </div>
        <BarChart width={170} height={70} data={getRandomData()}>
          <Bar
            dataKey="value"
            fill={color} //{theme.palette[color].main}
            radius={0}
            barSize={15}
          />
        </BarChart>
      </div>
    </Widget>
  );
}

// #######################################################################

function getRandomData() {
  return Array(7)
    .fill()
    .map(() => ({ value: Math.floor(Math.random() * 10) + 1 }));
}
