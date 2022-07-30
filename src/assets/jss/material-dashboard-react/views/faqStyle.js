
import { whiteColor, blackColor, hexToRgb } from "assets/jss/material-dashboard-react"

const faqStyle = {
    faqCard: {
        border: "0",
        marginBottom: "30px",
        marginTop: "60px",
        borderRadius: "0px 10px 10px 0px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.9)",
        backgroundColor: whiteColor,
        width: "100%",
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
        alignItems: "center",
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
    },
    faqCardQuestions: {
        width: "100%",
        height: "6.125rem",
        boxSizing: "border-box",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: " 1px solid #e6e6e6",
        padding: "1.25rem 1rem 1.25rem 0.563rem",
    },
    faqCardQuestion: {
        color: "#434344",
        fontSize: "21px",
        width: "inherit",
        display: "flex",
        justifyContent: "space-between",
    },
    faqAnswers: {
        marginTop: "2.75rem",
        marginLeft: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    },
    faqAnswer: {
        margin: 0,
        fontSize: "21px",
    },
}

export default faqStyle