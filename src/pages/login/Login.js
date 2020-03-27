import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  Box,
  Link,
  TextField,
  Fade,
} from "@material-ui/core";
import Image from "react-image-resizer";
import { withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";
import style from "../../style";

// logo
import logo from "../../images/logo.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var styles = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");

  return (
    <Grid container className={styles.container} style={style.backgroundStyle}>
      <div className={styles.formContainer} style={style.innerLogoStyle}>
        <div className={styles.form}>
          <React.Fragment>
            <img src={logo} alt="Fitster" style={{ width: "100%" }} />

            <Typography
              variant="h2"
              style={{ color: "#0FFFFF" }}
              align="center"
            >
              Aliados
            </Typography>
            <Typography variant="h5" align="center" style={{ color: "white" }}>
              Iniciar sesión a su cuenta de aliado
            </Typography>

            <Fade in={error}>
              <Typography color="secondary" className={styles.errorMessage}>
                Something is wrong with your login or password :(
              </Typography>
            </Fade>

            <TextField
              id="email"
              value={loginValue}
              onChange={e => setLoginValue(e.target.value)}
              margin="normal"
              color="white"
              variant="outlined"
              placeholder="Email"
              type="email"
              fullWidth
              InputProps={{
                classes: {
                  underline: styles.textFieldUnderline,
                  input: styles.textField,
                },
              }}
            />

            <TextField
              id="password"
              value={passwordValue}
              onChange={e => setPasswordValue(e.target.value)}
              margin="normal"
              color="white"
              variant="outlined"
              placeholder="Contraseña"
              type="password"
              fullWidth
              InputProps={{
                classes: {
                  underline: styles.textFieldUnderline,
                  input: styles.textField,
                },
              }}
            />
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
                  ingresar
                </Button>
              )}
            </div>
            <div className={styles.linkButtons}>
              <Link href="#" underline="always" onClick={() => {}}>
                Se me olvido la contraseña
              </Link>
            </div>
          </React.Fragment>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
