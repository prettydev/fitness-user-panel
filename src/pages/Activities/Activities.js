// import React, { useState } from "react";
// import {
//   Box,
//   FormControl,
//   Select,
//   TextField,
//   MenuItem,
//   Grid,
// } from "@material-ui/core";

// import "date-fns";
// import DateFnsUtils from "@date-io/date-fns";

// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";

// import { colors } from "../../style";

// // styles
// import useStyles from "./styles";

// // components
// import PageSearchTitle from "../../components/PageTitle/PageSearchTitle";
// import Widget from "../../components/Widget/Widget";
// import { Typography } from "../../components/Wrappers/Wrappers";

// export default function Activities() {
//   var classes = useStyles();

//   const [date, setDate] = useState(new Date("2014-08-18T21:11:54"));

//   const [period, setPeriod] = useState(0);

//   const handlePeriod = e => {
//     setPeriod(e.target.value);
//   };

//   const handleDate = d => {
//     setDate(d);
//   };

//   return (
//     <>
//       <PageSearchTitle title="Actividades" />

//       <Box
//         display="flex"
//         flextDirection="row"
//         justifyContent="space-between"
//         alignItems="center"
//       >
//         <Box flex={4}>
//           <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <KeyboardDatePicker
//               disableToolbar
//               variant="inline"
//               format="MM/dd/yyyy"
//               margin="normal"
//               id="date-picker-inline"
//               label="Date picker inline"
//               value={date}
//               onChange={handleDate}
//               KeyboardButtonProps={{
//                 "aria-label": "change date",
//               }}
//             />
//           </MuiPickersUtilsProvider>
//         </Box>
//         <Box flex={4}>
//           <FormControl variant="outlined" className={classes.formControl}>
//             <Select
//               labelId="demo-simple-select-outlined-label"
//               id="demo-simple-select-outlined"
//               value={period}
//               onChange={handlePeriod}
//               label=""
//               style={{ color: colors.white }}
//             >
//               <MenuItem value={0}>Mes</MenuItem>
//               <MenuItem value={1}>Semana</MenuItem>
//               <MenuItem value={2}>Dia</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <Box flex={4} />
//       </Box>
//     </>
//   );
// }

import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54"),
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
