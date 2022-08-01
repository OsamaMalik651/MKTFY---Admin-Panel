import { card } from "assets/jss/material-dashboard-react";
import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  infoCard: {
    ...card,
    maxWidth: "16.25rem",
    height: "16.25rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: "open sans",
    "& > $infoCardFooter": {
      padding: 0
    }

  },
  infoCardHeader1: {
    backgroundColor: "blue"
  },
  infoCardBody: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "& p": {
      fontSize: "1.313rem",
      color: grayColor[14],
    },
    "& *": {
      padding: 0
    }
  },
  infoCardFooter: {
    display: "flex",
    justifyContent: "flex-end",
    color: grayColor[14],
    fontSize: "1rem",
    fontFamily: "open sans",


  },
  cardCategory: {
    color: grayColor[14],
    fontSize: "24px",
    fontWeight: "300",
    marginTop: "0",
    paddingTop: "13px",
    width: "100%",
    height: "33px",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "bold",
    fontSize: "45px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardText: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "bold",
    fontSize: "21px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

export default dashboardStyle;
