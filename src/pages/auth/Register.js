import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  Link,
  Box,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// logo
import logo from "../../images/logo.svg";
import { colors, style } from "../../style";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

const countries = [
  {
    value: 0,
    label: "US",
  },
  {
    value: 1,
    label: "Canada",
  },
  {
    value: 2,
    label: "France",
  },
];

const cities = [
  {
    value: 0,
    label: "Moscow",
  },
  {
    value: 1,
    label: "Singapore",
  },
  {
    value: 2,
    label: "New york",
  },
];

const types = [
  {
    value: 0,
    label: "Yoga",
  },
  {
    value: 1,
    label: "Boxing",
  },
  {
    value: 2,
    label: "Dance",
  },
];

function Register(props) {
  var styles = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [nameValue, setNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  const [type, setType] = useState("Yoga");
  const [country, setCountry] = useState("US");
  const [city, setCity] = useState("New york");

  const handleType = event => {
    setType(event.target.value);
  };
  const handleCountry = event => {
    setCountry(event.target.value);
  };
  const handleCity = event => {
    setCity(event.target.value);
  };

  return (
    <>
      <Box
        borderBottom={1}
        flexDirection="column"
        style={{
          borderBottomColor: "#707070",
          backgroundColor: "black",
          padding: 3,
        }}
      >
        <Box style={{ textAlign: "center" }}>
          <img src={logo} alt="Fitster" style={{ width: "10%" }} />
        </Box>
        <Typography
          variant="h3"
          style={{ color: colors.lightGreen }}
          align="center"
        >
          Aliados
        </Typography>
      </Box>

      <Box
        style={{
          backgroundColor: "#141414",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          flexDirection="column"
          style={{
            width: "50%",
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography
            variant="h3"
            style={{ color: colors.lightGreen, paddingBottom: 15 }}
            align="center"
          >
            QUIERES ALIARTE CON FITSTER Y CRECER TU NEGOCIO?
          </Typography>
          <Typography
            variant="h5"
            style={{ color: colors.white, width: "70%" }}
            align="center"
          >
            Llena el formulario y comienza a creer con nosotros!
          </Typography>
        </Box>
      </Box>

      <React.Fragment>
        <form
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container style={{ width: "70%", padding: 10 }}>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Nombres persona de contacto*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Apellidos persona de contacto*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Nombre del centro de entrenamiento*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Tipo de Centro"
                  value={type}
                  onChange={handleType}
                  SelectProps={{
                    native: true,
                  }}
                  size="small"
                  helperText=""
                  variant="outlined"
                  style={style.regInput}
                >
                  {types.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="País*"
                  value={country}
                  onChange={handleCountry}
                  SelectProps={{
                    native: true,
                  }}
                  size="small"
                  helperText=""
                  variant="outlined"
                  style={style.regInput}
                >
                  {countries.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="NIT*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Ciudad*"
                  value={city}
                  onChange={handleCity}
                  SelectProps={{
                    native: true,
                  }}
                  size="small"
                  helperText=""
                  variant="outlined"
                  style={style.regInput}
                >
                  {cities.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Dirección del centro*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Teléfono*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="E- mail*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Confirmación contraseña*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
              <Grid item xs={6} style={style.regGrid}>
                <TextField
                  id="outlined-basic"
                  label="Contraseña*"
                  variant="outlined"
                  size="small"
                  fullwidth
                  style={style.regInput}
                />
              </Grid>
            </Grid>
          </Grid>
        </form>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 30,
          }}
        >
          <Typography variant="caption" style={{ width: "25%" }}>
            Utilizaremos la información que usted nos envíe para informarle
            sobre las oportunidades de alianza y proporcionarle otras
            actualizaciones. Al llenar y enviar este formulario, usted acepta
            nuestros <font color={colors.skyBlue}>Términos y condiciones</font>{" "}
            y la <font color={colors.skyBlue}>Política de privacidad</font>.
          </Typography>
        </Box>

        <div className={styles.formButtons}>
          {isLoading ? (
            <CircularProgress size={26} className={styles.loginLoader} />
          ) : (
            <Button
              // disabled={
              //   loginValue.length === 0 || passwordValue.length === 0
              // }
              onClick={() =>
                loginUser(
                  userDispatch,
                  loginValue,
                  passwordValue,
                  props.history,
                  setIsLoading,
                  setError,
                )
              }
              variant="contained"
              size="large"
              style={style.loginBtnStyle}
            >
              Enviar
            </Button>
          )}
        </div>

        <div className={styles.linkButtons} style={{ paddingBottom: 30 }}>
          <span style={{ paddingRight: 10 }}>Ya eres un miembro?</span>
          <Link href="/#/login" underline="always" onClick={() => {}}>
            ingresar
          </Link>
        </div>
      </React.Fragment>
    </>
  );
}

export default withRouter(Register);
