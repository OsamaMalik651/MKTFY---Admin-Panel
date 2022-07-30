
import {
    grayColor,
    primaryColor,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    roseColor,
    whiteColor,
    blackColor,
    hexToRgb,
} from "assets/jss/material-dashboard-react.js";
const roundedbuttonStyle = {
    button: {
        minHeight: "auto",
        minWidth: "auto",
        width: "21.563rem",
        height: "4rem",
        backgroundColor: grayColor[1],
        color: whiteColor,
        boxShadow:
            "0 2px 2px 0 rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.14), 0 3px 1px -2px rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.2), 0 1px 5px 0 rgba(" +
            hexToRgb(grayColor[0]) +
            ", 0.12)",
        border: "none",
        borderRadius: "37px",
        position: "relative",
        padding: "1.125rem 7.188rem",
        margin: ".3125rem 0.063rem",
        fontSize: "1.25rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        willChange: "box-shadow, transform",
        // transition:
        //     "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            color: whiteColor,
            backgroundColor: "transparent",
        },
    },
    primary: {
        backgroundColor: primaryColor[6],
        "&:hover": {
            backgroundColor: primaryColor[6],
        },
        "&:focus": {
            backgroundColor: primaryColor[1],
        },
    },
    secondary: {
        backgroundColor: warningColor[1],
        "&:hover,&:focus": {
            backgroundColor: warningColor[1],
        },
    },
    gray: {
        backgroundColor: grayColor[4],
        "&:hover,&:focus": {
            backgroundColor: grayColor[5],
        },
    },
    danger: {
        backgroundColor: dangerColor[0],
        "&:hover,&:focus": {
            backgroundColor: dangerColor[0],
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(dangerColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(blackColor) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(dangerColor[0]) +
                ", 0.2)",
        },
    },
    dangerOutline: {
        backgroundColor: "transparent",
        border: `1px solid ${dangerColor[0]}`,
        color: dangerColor[0],
        boxShadow:
            "0 2px 2px 0 rgba(" +
            hexToRgb(dangerColor[0]) +
            ", 0.14), 0 3px 1px -2px rgba(" +
            hexToRgb(dangerColor[0]) +
            ", 0.2), 0 1px 5px 0 rgba(" +
            hexToRgb(dangerColor[0]) +
            ", 0.12)",
        "&:active": {
            backgroundColor: dangerColor[0],
            color: whiteColor,
        },
        "&:not(:active)": {
            backgroundColor: "transparent",
            color: dangerColor[0],
        },
    },
    cancel: {
        backgroundColor: grayColor[4],
        color: grayColor[8],
        "&:hover,&:focus": {
            backgroundColor: grayColor[4],
            color: grayColor[8],

        },
    },
    outline: {
        backgroundColor: "transparent",
        "&:hover,&:focus": {
            backgroundColor: "transparent",
        },
    },
    sm: {
        width: "8.938rem",
        height: "3.125rem",
        padding: "1rem 3.125rem",
        fontSize: "1rem",
        fontWeight: "500",
        lineHeight: "1.5",
        borderRadius: "2.313rem",
    },
    lg: {
        width: "36rem",
        height: "4rem",
        padding: "1rem 3.125rem",
        fontSize: "1.25rem",
        fontWeight: "500",
        lineHeight: "1.5",
        borderRadius: "2.313rem",
    },
    disabled: {
        cursor: "not-allowed",
        pointerEvents: "none",
    }
}

export default roundedbuttonStyle;