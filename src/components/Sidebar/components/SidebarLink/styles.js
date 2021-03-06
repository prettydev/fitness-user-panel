import { makeStyles } from "@material-ui/styles";
import { colors } from "../../../../style";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      // backgroundColor: theme.palette.background.light,
      backgroundColor: colors.sidebarBgColor,
    },
  },
  linkActive: {
    // backgroundColor: theme.palette.background.light,
  },
  linkNested: {
    paddingLeft: 0,
    "&:hover, &:focus": {
      // backgroundColor: "#FFFFFF",
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    width: 24,
    display: "flex",
    justifyContent: "center",
    "&:hover, &:focus": {
      color: colors.lightGreen,
    },
  },
  linkIconActive: {
    // color: theme.palette.primary.main,
    color: colors.lightGreen,
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
    "&:hover, &:focus": {
      color: colors.lightGreen,
    },
  },
  linkTextActive: {
    // color: theme.palette.text.primary,
    color: colors.lightGreen,
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    // backgroundColor: "#D8D8D880",
  },
}));
