import { warningColor } from "assets/jss/material-dashboard-react"
import { grayColor } from "assets/jss/material-dashboard-react"
import { successColor } from "assets/jss/material-dashboard-react"
import { whiteColor } from "assets/jss/material-dashboard-react"
import { dangerColor } from "assets/jss/material-dashboard-react"
import { blackColor } from "assets/jss/material-dashboard-react"
import { primaryColor } from "assets/jss/material-dashboard-react"

const listingsStyle = {
    columnView: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: grayColor[13],
        gap: "1.25rem",
        marginTop: "0px",
        height: "fit-content",

    },
    listingFilter: {
        backgroundColor: grayColor[13],
        display: "flex",
        fontSize: "1.75rem",
        fontFamily: "open sans",
        fontWeight: "600",
        gap: "6.375rem",
        "& > *": {
            margin: 0,
            padding: 0
        },
        color: grayColor[8],
        "& p": {
            cursor: "pointer",
            paddingBottom: "10px"
        },

    },
    listingFilterSelected: {
        color: primaryColor[4],
        borderBottom: `0.313rem solid ${primaryColor[8]}`,
        paddingBottom: "0px",
        display: "inline-block",
    },
    listings: {
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        minHeight: "42.625rem"
    },

    listingCard: {
        width: "100%",
        height: "13.375rem",
        boxShadow: `0px 1px 0px ${grayColor[3]}`,
        borderRadius: "0.625rem",
        display: "flex",
        alignItems: "center",
        backgroundColor: grayColor[12],
    },
    listingImage: {
        width: "21.875rem",
        height: "inherit",
        borderRadius: "10px 0px 0px 10px"
    },
    listingDescription: {
        height: "116px",
        paddingLeft: "0.312rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.25rem",
        boxSizing: "border-box",
        "& *": {
            margin: 0,
            padding: 0
        }

    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: blackColor,
    },
    price: {
        color: "#6318af",
        fontSize: "1.25rem",
        fontWeight: "bold"
    },
    condition: {
        fontSize: "0.875rem",
        display: "flex",
        backgroundColor: primaryColor[3],
        width: "fit-content",
        padding: "0.2rem 0.625rem",
        borderRadius: "4px",
        color: primaryColor[4],
        textTransform: "uppercase",
        fontWeight: "500"
    },
    stateTag: {
        backgroundColor: warningColor[2],
        borderRadius: "4px",
        marginLeft: "auto",
        minHeight: "2rem",
        maxWidth: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        "& *": {
            margin: 0,
            padding: 0
        },
        "& p": {
            textTransform: "uppercase",
            fontSize: "1.25rem",
            color: warningColor[1],
            fontWeight: "400",
            padding: "0rem 0.75rem",
        }
    },
    decisionButtons: {
        display: "flex",
        marginRight: "4rem",
        marginLeft: "auto",
        gap: "2.188rem",

    },
    approve: {
        color: successColor[0],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "4.5rem",
        cursor: "pointer",
        "& p": {
            fontSize: "1.125rem",
            fontWeight: "600"
        }
    },
    reject: {
        color: dangerColor[0],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "& p": {
            fontSize: "1.125rem",
            fontWeight: "600"
        }
    },
    pageSelector: {
        alignSelf: "flex-end",
        width: "9.625rem",
        height: "3rem",
        border: `1px solid ${grayColor[1]}`,
        borderRadius: "0.625rem",
        display: "flex",
        "& *": {
            margin: 0,
            padding: 0
        },
        "& :first-child": {
            borderRadius: "0.625rem 0rem 0rem 0.625rem"
        },
        "& :last-child": {
            borderRadius: "0rem 0.625rem 0.625rem 0rem"
        },
        "& button": {
            height: "100%",
            width: "2.75rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: whiteColor,
            cursor: "pointer",
            "&:disabled": {
                cursor: "not-allowed",
            }
        },
        "& p": {
            width: "4.125rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${grayColor[1]}`,
            borderTop: "0",
            borderBottom: "0",
            fontSize: "1.313rem",
            color: "#434344",
            fontWeight: "500"
        }
    }




}
export default listingsStyle