import React, { useState } from "react";
import ReactDom from "react-dom";
import { Grid, Box, TextField, Button, Link } from "@material-ui/core";
import { Close as CloseIcon } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";

// styles
import "react-toastify/dist/ReactToastify.css";
import useStyles from "./styles";

import PageTitle from "../../components/PageTitle/PageTitle";

const AvatarPicker = require("material-ui-avatar-picker");

export default function Account(props) {
  var styles = useStyles();

  const [state, setState] = useState({
    img: null,
    savedImg: null,
    previewOpen: true,
  });

  const getInitialState = () => {
    return {
      previewOpen: false,
      img: null,
      savedImg: "http://www.placekitten.com/400/400",
    };
  };
  const handleFileChange = dataURI => {
    setState({
      img: dataURI,
      savedImg: state.savedImg,
      previewOpen: true,
    });
  };
  const handleSave = dataURI => {
    setState({
      previewOpen: false,
      img: null,
      savedImg: dataURI,
    });
  };
  const handleRequestHide = () => {
    setState({
      previewOpen: false,
      savedImg: state.savedImg,
      img: state.img,
    });
  };

  return (
    <>
      <PageTitle title="Cuenta" />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        style={{ paddingTop: 50 }}
      >
        <Box flex={5}>
          <Box className={styles.inputBox}>
            <TextField
              id="outlined-basic"
              label="Contraseña antigua*"
              variant="outlined"
              size="small"
              fullwidth
            />
          </Box>
          <Box className={styles.inputBox}>
            <TextField
              id="outlined-basic"
              label="Nueva contraseña*"
              variant="outlined"
              size="small"
              fullwidth
            />
          </Box>
          <Box className={styles.inputBox}>
            <TextField
              id="outlined-basic"
              label="Repetir contraseña nueva*"
              variant="outlined"
              size="small"
              fullwidth
            />
          </Box>
        </Box>
        <Box flex={7}>
          <Box className={styles.inputBox}>
            {
              // <AvatarPicker
              //   onRequestHide={handleRequestHide}
              //   previewOpen={state.previewOpen}
              //   onSave={handleSave}
              //   image={state.img}
              //   width={400}
              //   height={400}
              // />
            }
          </Box>
          <Box className={styles.inputBox}>
            <Link color={"red"}>Cerrar sesión</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
