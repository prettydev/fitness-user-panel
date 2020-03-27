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

function ForgotPasswordConfirm(props) {
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
              style={{ color: colors.white, marginTop: 30 }}
              align="center"
            >
              Email enviado
            </Typography>

            <Typography
              variant="h5"
              align="center"
              style={{ color: colors.white, marginBottom: 20 }}
            >
              Te enviamos un email con instrucciones para restablecer la
              contraseña a email@ejemplo.com. Si no lo ves en tu bandeja de
              entrada, revisa la carpeta de correo no deseado.
            </Typography>

            <Typography
              variant="h6"
              align="center"
              style={{
                color: colors.white,
                // marginLeft: -30,
                // marginRight: -30,
              }}
            >
              Si ya no tienes acceso a esta cuenta de email, contáctanos.
            </Typography>
          </React.Fragment>
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(ForgotPasswordConfirm);
