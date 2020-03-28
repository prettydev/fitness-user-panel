import React, { useState } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Box,
  Input,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Label,
  CustomizedLabel,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import RDot from "../../components/Sidebar/components/RDot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

import { colors, style } from "../../style";
import rate_bg from "../../images/rate_bg.svg";

const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Mujeres", value: 400, color: colors.brightPink },
  { name: "Hombres", value: 300, color: colors.yellowOrange },
];

const radarData = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const barData = [
  {
    name: "Page A",
    uv: 40,
  },
  {
    name: "Page B",
    uv: 30,
  },
  {
    name: "Page C",
    uv: 20,
  },
  {
    name: "Page D",
    uv: 27,
  },
  {
    name: "Page E",
    uv: 18,
  },
  {
    name: "Page F",
    uv: 23,
  },
  {
    name: "Page G",
    uv: 34,
  },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");

  const [period, setPeriod] = useState(0);
  const handlePeriod = event => {
    setPeriod(event.target.value);
  };

  const [type, setType] = useState(0);
  const handleType = event => {
    setType(event.target.value);
  };

  const typeSelector = props => {
    return (
      <Select
        value={mainChartState}
        onChange={e => setMainChartState(e.target.value)}
        input={
          <Input disableUnderline classes={{ input: classes.selectInput }} />
        }
        autoWidth
      >
        <MenuItem value="daily">Bodycombat</MenuItem>
        <MenuItem value="weekly">Bodycombat</MenuItem>
        <MenuItem value="monthly">Bodycombat</MenuItem>
      </Select>
    );
  };

  const chartWidth = 200;
  const chartHeight = 200;

  return (
    <>
      <PageTitle title="RESUMEN" date={true} />
      <Box
        display="flex"
        flextDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box flex={1}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={period}
              onChange={handlePeriod}
              label=""
              style={{ color: colors.white }}
            >
              <MenuItem value={0} style={{ backgroundColor: "blue" }}>
                last week
              </MenuItem>
              <MenuItem value={1}>last month</MenuItem>
              <MenuItem value={2}>last 3 months</MenuItem>
              <MenuItem value={3}>last 6 months</MenuItem>
              <MenuItem value={4}>last 12 months</MenuItem>
              <MenuItem value={5}>last 2 years</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box flex={5} />
        <Box
          flex={1}
          borderRadius={16}
          m={1}
          border={1}
          style={{
            width: "8rem",
            height: "8rem",
            background: `url(${rate_bg}) no-repeat #223853`,
            backgroundPosition: "50% 70%",
            zIndex: 2,
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
        >
          <Typography variant="h4" style={{ color: colors.white }}>
            Rating
          </Typography>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={type}
            onChange={handleType}
            label=""
            style={{ color: colors.white, fontSize: 15 }}
            input={
              <Input
                disableUnderline
                classes={{ input: classes.selectInput }}
              />
            }
          >
            <MenuItem value={0}>Entrenamiento libre</MenuItem>
            <MenuItem value={1}>Boxing</MenuItem>
            <MenuItem value={2}>Dance</MenuItem>
          </Select>

          <Typography variant="h2" style={{ color: "#81C924" }}>
            4.3
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {mock.bigStat.map(stat => (
          <Grid item md={4} sm={6} xs={12} key={stat.product}>
            <BigStat {...stat} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Widget
            bodyClass={classes.mainChartBody}
            header={
              <div className={classes.mainChartHeader}>
                <Box flex={8}>
                  <Typography
                    variant="h5"
                    color="text"
                    colorBrightness="secondary"
                  >
                    Reservaciones
                  </Typography>
                </Box>
                <Box flex={2} display="flex" flexDirection="row">
                  <Select
                    value={mainChartState}
                    onChange={e => setMainChartState(e.target.value)}
                    input={
                      <Input
                        disableUnderline
                        classes={{ input: classes.selectInput }}
                      />
                    }
                    style={{ marginRight: 10 }}
                    autoWidth
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Semanal</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="monthly">6 Monthly</MenuItem>
                    <MenuItem value="monthly">Yearly</MenuItem>
                  </Select>
                  {typeSelector()}
                </Box>
              </div>
            }
          >
            <ResponsiveContainer width="100%" minWidth={500} height={350}>
              <AreaChart
                margin={{ top: 0, right: -15, left: -15, bottom: 0 }}
                data={mainChartData}
              >
                <defs>
                  <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={colors.lightPurple}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={colors.lightPurple}
                      stopOpacity={0}
                    />
                  </linearGradient>
                  <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor={colors.lightBlue}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={colors.lightBlue}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <YAxis
                  ticks={[0, 2500, 5000, 7500]}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={true}
                />
                <XAxis
                  tickFormatter={i => i + 1}
                  tick={{ fill: theme.palette.text.hint + "80", fontSize: 14 }}
                  stroke={theme.palette.text.hint + "80"}
                  tickLine={true}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Area
                  type="monotone"
                  dataKey="desktop"
                  strokeWidth={1}
                  activeDot={true}
                  stroke={colors.lightPurple}
                  fillOpacity={1}
                  fill="url(#colorDesktop)"
                />
                <Area
                  type="monotone"
                  dataKey="mobile"
                  strokeWidth={1}
                  activeDot={true}
                  stroke={colors.lightBlue}
                  fillOpacity={1}
                  fill="url(#colorMobile)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className={classes.mainChartHeaderLabels}>
              <div className={classes.mainChartHeaderLabel}>
                <Dot color={colors.lightPurple} />
                <Typography
                  className={classes.mainChartLegentElement}
                  style={{ color: colors.lightPurple }}
                >
                  Reservaciones
                </Typography>
              </div>
              <div className={classes.mainChartHeaderLabel}>
                <Dot color={colors.lightBlue} />
                <Typography
                  className={classes.mainChartLegentElement}
                  style={{ color: colors.lightBlue }}
                >
                  Lista de espera
                </Typography>
              </div>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Widget
            title=""
            upperTitle
            bodyClass={classes.fullHeightBody}
            className={classes.card}
          >
            <div className={classes.visitsNumberContainer}>
              <ResponsiveContainer
                width="100%"
                minWidth={chartWidth}
                height={chartHeight}
              >
                <RadarChart
                  // cx={100}
                  // cy={70}
                  // outerRadius={80}
                  // width={200}
                  // height={180}
                  data={radarData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar
                    name="Ingresos generados"
                    dataKey="A"
                    stroke={colors.lightPurple}
                    fill={colors.lightPurple}
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Ingresos Perdidos"
                    dataKey="B"
                    stroke={colors.lightBlue}
                    fill={colors.lightBlue}
                    fillOpacity={0.6}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Widget
            title="Edad"
            upperTitle
            className={classes.card}
            bodyClass={classes.fullHeightBody}
          >
            <ResponsiveContainer
              width="100%"
              minWidth={chartWidth}
              height={chartHeight}
            >
              <BarChart
                // width={240}
                // height={160}
                data={barData}
                margin={
                  {
                    // top: 5, right: 30, left: 20, bottom: 5,
                  }
                }
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill={colors.lightGreen} />
              </BarChart>
            </ResponsiveContainer>
          </Widget>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Widget title="Genero" upperTitle className={classes.card}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <ResponsiveContainer
                  width="100%"
                  minWidth={chartWidth}
                  height={chartHeight}
                >
                  <PieChart margin={{ left: theme.spacing(2) }}>
                    <Pie
                      data={PieChartData}
                      innerRadius={45}
                      outerRadius={60}
                      dataKey="value"
                      labelLine={true}
                    >
                      <Label
                        content={
                          "92024"
                          // <Box
                          //   display="flex"
                          //   flexDirection="cloumn"
                          //   alignItems="center"
                          // >
                          //   <Typography variant="h4" color="text">
                          //     920,4
                          //   </Typography>
                          //   <Typography variant="caption" color="text">
                          //     Usuarios Totales
                          //   </Typography>
                          // </Box>
                        }
                        position="center"
                      />
                      {PieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.pieChartLegendWrapper}>
                  {PieChartData.map(({ name, value, color }, index) => (
                    <Box display="flex" flexDirection="column">
                      <div
                        flex={1}
                        key={color}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <RDot color={color} flex={1} />
                        <Typography variant="body1" color="text" flex={3}>
                          {value}%
                        </Typography>
                      </div>
                      <Typography flex={1} variant="caption">
                        {name}
                      </Typography>
                    </Box>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
