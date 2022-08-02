import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    padding: "0rem 6rem 0rem 2rem",

  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",

  },
  content: {
    marginTop: "122px",
    padding: "30px 15px",
    maxHeight: "fit-content",

  },
  container: {
    maxHeight: "fit-content",
  },
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
