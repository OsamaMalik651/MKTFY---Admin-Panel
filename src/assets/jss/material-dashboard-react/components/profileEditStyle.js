import { hexToRgb } from "@material-ui/core"
import { primaryColor } from "assets/jss/material-dashboard-react"
import { grayColor } from "assets/jss/material-dashboard-react"
import { whiteColor } from "assets/jss/material-dashboard-react"
import { blackColor } from "assets/jss/material-dashboard-react"

const profileStyles = {
    profileEditCard: {
        border: "0",
        marginBottom: "30px",
        marginTop: "80px",
        borderRadius: "10px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.9)",
        backgroundColor: whiteColor,
        width: "77.813rem",
        height: "36.75rem",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        fontFamily: "open sans",
        "& *": {
            margin: 0,
            padding: 0,
        }
    },
    profileHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingLeft: "2.625rem"
    },
    profileCardHeading: {
        margin: 0,
        padding: 0,
        fontSize: "2.625rem",
        fontSize: "600",
        fontFamily: "Open Sans",
        color: "#F4F4F5",
        margin: "1.5rem auto 1.5rem 1.5rem"
    },
    profileCardBody: {
        minHeight: "inherit",
        height: "fit-content",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "2.75rem 2.25rem 0rem 2.25rem",
        "& > :nth-child(3)": {
            marginTop: "auto",
            marginBottom: "2.75rem",
        }
    },
    smallInputs: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        gap: "2.25rem",
    },
    InputDiv: {
        display: "flex",
        flexDirection: "column",
        minWidth: "33.25rem",
        width: "100%",
        gap: "12px",
        margin: "1.5rem auto",
        "& input:focus": {
            outline: `${primaryColor[1]} solid 1px`,
        },
        "& input::placeholder": {
            marginLeft: "24px"
        },
        "&> :nth-child(1)": {
            fontSize: "1rem"
        },
    },
    Input: {
        height: "4.25rem",
        fontSize: "20px",
        paddingLeft: "24px",
        border: `1px solid ${grayColor[4]}`,
        borderRadius: "4px",
    },
    logoutCard: {
        width: "64.375rem",
        height: "20.313rem"
    },
    logoutCardHeader: {
        width: "66.125rem",
        height: "8.5rem",
        position: "relative",
        right: "1.813rem",
    },
    logoutCardBody: {
        display: "flex",
        gap: "5.75rem",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "3.313rem 0rem 0rem 3rem",
        "& p": {
            fontSize: "2rem"
        }
    },
    smallButtonInputs: {
        alignSelf: "flex-end",
        marginBottom: "1.625rem",
        marginRight: "3.5rem",
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        width: "34.25rem",
        gap: "1.75rem",
        "& > button": {
            width: "16.25rem"
        }
    }
}

export default profileStyles