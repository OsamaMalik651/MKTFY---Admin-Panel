import { warningBoxShadow } from "assets/jss/material-dashboard-react";
import { blackColor } from "assets/jss/material-dashboard-react";
import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "transparent",
    borderBottom: `2px solid ${grayColor[3]}`,
    boxShadow: "none",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#434344",
    border: "0",
    borderRadius: "0px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "122px",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    fontFamily: "open sans"
  },
  container: {
    ...container,
    minHeight: "50px",
    width: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  flex: {
    flex: 1,
  },
  searchBar: {
    width: "21.563rem",
    height: "3.75rem",
    marginRight: "7.375rem",
    marginLeft: "auto",
    marginTop: "1rem",
    backgroundColor: whiteColor,
    borderRadius: "0.5rem",
    boxShadow: `0px 3px 6px ${grayColor[5]}`,
    display: "flex",
    alignItems: "center",
    "& input": {
      flexGrow: 1,
      height: "initial",
      border: "none",
      borderRadius: "0.5rem",
      color: blackColor,
      fontSize: "1rem",
      paddingLeft: "1.5rem"
    },
    "& svg": {
      marginRight: "0.813rem",
      cursor: "pointer"
    }


  },
  adminButton: {
    width: "18.375rem",
    height: "4.5rem",
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderLeft: `2px solid ${grayColor[3]}`,
    fontSize: "1.5rem",
    color: grayColor[14],
    "& p": {
      "& span": {
        fontWeight: "bold"
      }
    },
    "& svg": {
      cursor: "pointer"
    }
  },

  adminOptions: {
    position: "absolute",
    boxSizing: "border-box",
    right: "3rem",
    top: "7rem",
    width: "36rem",
    height: "17.125rem",
    backgroundColor: "white",
    border: "1px 1px 1px 1px",
    borderRadius: "0.5rem",
    boxShadow: `0px 3px 6px ${grayColor[5]}`,
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    paddingTop: "2.75rem",
    "& *": {
      margin: 0,
      padding: 0
    },
    "& h3": {
      fontSize: "1.875rem",
      color: grayColor[1],
      fontWeight: "500",
      paddingLeft: "2.375rem",
      cursor: "pointer"
    },
    "& p": {
      fontSize: "1.5rem",
      color: primaryColor[1],
      fontWeight: "500",
      paddingLeft: "2.375rem",
      cursor: "pointer"
    }
  },
  adminLogout: {
    width: "initial",
    height: "6.75rem",
    backgroundColor: "#F8F8F8",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    "& p": {
      fontSize: "1.75rem",
      color: primaryColor[1],
      fontWeight: "500",
    }
  },
  title: {
    ...defaultFont,
    boxSizing: "border-box",
    paddingLeft: 0,
    paddingTop: "2rem",
    letterSpacing: "unset",
    lineHeight: "1.875rem",
    fontSize: "1.875rem",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    margin: "0",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  appResponsive: {
    top: "8px",
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow,
  },
});

export default headerStyle;
