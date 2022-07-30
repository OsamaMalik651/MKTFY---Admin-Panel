import { primaryColor } from "assets/jss/material-dashboard-react"
import { grayColor } from "assets/jss/material-dashboard-react"
import { whiteColor, blackColor, hexToRgb } from "assets/jss/material-dashboard-react"

const faqEditStyle = {
    faqEditCard: {
        border: "0",
        marginBottom: "30px",
        marginTop: "80px",
        borderRadius: "10px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.9)",
        backgroundColor: whiteColor,
        width: "78.125rem",
        height: "54.188rem",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        fontFamily: "Open Sans",
    },
    faqHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    faqCardHeading: {
        margin: 0,
        padding: 0,
        fontSize: "2.625rem",
        fontSize: "600",
        fontFamily: "Open Sans",
        color: "#F4F4F5",
        margin: "1.5rem auto 1.5rem 1.5rem"
    },
    faqCardBody: {
        margin: 0,
        padding: 0,
        padding: "0px 54px auto 38px",
        minHeight: "44rem",
        height: "fit-content",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // overFlow: "scroll"
    },
    InputDiv: {
        display: "flex",
        flexDirection: "column",
        width: "33.25rem",
        gap: "12px",
        margin: "1.5rem auto",
        "& input::placeholder": {
            marginLeft: "24px"
        },
        "&> :nth-child(1)": {
            fontSize: "1rem"
        }
    },
    Input: {
        height: "4.25rem",
        fontSize: "20px",
        paddingLeft: "24px",
        border: `1px solid ${grayColor[4]}`,
        borderRadius: "4px"
    },
    TextAreaDiv: {
        display: "flex",
        flexDirection: "column",
        width: "69.75rem",
        height: "23.563rem",
        gap: "12px",
        "& input::placeholder": {
            marginLeft: "24px"
        },
        "&> :nth-child(1)": {
            fontSize: "1rem"
        }
    },
    TextArea: {
        resize: "none",
        height: "inherit",
        fontSize: "21px",
        fontFamily: "open sans",
        paddingTop: "2.125rem",
        paddingLeft: "24px",
        border: `1px solid ${grayColor[4]}`,
        borderRadius: "4px",
        color: blackColor,
        "&:focus": {
            borderColor: primaryColor[1],
        }
    },
    Button: {
        alignSelf: "center",
        marginTop: "4.625rem"
    }
}

export default faqEditStyle