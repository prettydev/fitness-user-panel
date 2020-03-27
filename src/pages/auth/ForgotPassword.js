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
import { colors, style } from "../../style";

// logo
import logo from "../../images/logo.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function ForgotPassword(props) {
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
              style={{ color: colors.lightGreen }}
              align="center"
            >
              Aliados
            </Typography>

            <Typography
              variant="h5"
              align="center"
              style={{ color: colors.white, marginTop: 30, marginBottom: 20 }}
            >
              Olvidaste tu contraseña?
            </Typography>

            <Typography
              variant="h6"
              align="center"
              style={{
                color: colors.white,
                marginLeft: -30,
                marginRight: -30,
              }}
            >
              Te enviaremos un email con instrucciones sobre como restablecer tu
              contraseña
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
              color={colors.white}
              variant="outlined"
              placeholder="email@ejemplo.com"
              textAlign="center"
              type="email"
              fullWidth
              InputProps={{
                classes: {
                  underline: styles.textFieldUnderline,
                  input: styles.centerTextField,
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
                  onClick={() => {
                    //send email proc
                    props.history.push("/forgot_password_confirm");
                  }}
                  variant="contained"
                  size="large"
                  style={style.loginBtnStyle}
                >
                  Enviar un
                </Button>
              )}
            </div>
          </React.Fragment>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(ForgotPassword);
