import inner_logo from "./images/inner_logo.svg";
import background from "./images/background.svg";
import login_svg from "./images/login_btn.svg";

export default {
  inputBdColor: "#5B5B5B",
  inputBgColor: "#282F37",
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
    color: "white",
    backgroundImage: `url(${login_svg})`,
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 2,
  },
};
