import inner_logo from "./images/inner_logo.svg";
import background from "./images/background.svg";
import login_svg from "./images/login_btn.svg";

export const colors = {
  globalBgColor: "#222F40",
  globalWdColor: "#223347",
  sidebarBgColor: "#1C293A",
  inputBdColor: "#5B5B5B",
  inputBgColor: "#282F37",
  lightGreen: "#0FFFFF",
  skyBlue: "#0086FB",
  white: "white",
  lightPurple: "#6E61A8",
  lightBlue: "#54D8FF",
  brightPink: "#C04DD8",
  yellowOrange: "#E06950",
};

export const style = {
  backgroundStyle: {
    width: "100%",
    height: "100%",
    position: "fixed",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
  },
  innerLogoStyle: {
    width: "20%",
    height: "20%",
    position: "fixed",
    backgroundImage: `url(${inner_logo})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
  },
  loginBtnStyle: {
    color: colors.white,
    backgroundImage: `url(${login_svg})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
  },
  cancelBtnStyle: {
    color: colors.white,
    borderColor: "#1D88E8",
  },
  regGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  regInput: {
    padding: 10,
    margin: 5,
    width: "90%",
  },
};
