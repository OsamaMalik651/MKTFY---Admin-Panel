import { blue } from "@material-ui/core/colors";
import { primaryColor } from "assets/jss/material-dashboard-react";
import { grayColor } from "assets/jss/material-dashboard-react";
import faqStyle from "../views/faqStyle";
import listingsStyle from "../views/listingsStyle";

const userDetailsStyle = {
    userCard: {
        ...faqStyle.faqCard,
        backgroundColor: "#eeeeee",
        boxShadow: "none",
    },
    userDetailsCardHeader: {
        display: "flex",
        alignItems: "center",
        height: "17.25rem",
        padding: ".25rem 1.25rem",
        left: "-1rem",
        width: "100%",
        "& svg": {
            cursor: "pointer",
        }
    },
    userDetails: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans",
        gap: "1.313rem",
        "& *": {
            margin: 0,
            padding: 0,
        },
        "& h1": {
            fontSize: "2.5rem",
            color: "#F4F4F5",
            fontWeight: "600",
        },
        "& p": {
            fontSize: "1.313rem",

        }
    },
    userCardBody: {
        ...faqStyle.faqCardBody,
        minHeight: "fit-content",
        height: "fit-content",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "0rem",
        paddingRight: "0rem",
        gap: "1rem",
    },
    userSummaryCard: {
        display: "flex",
        height: "10.75rem",
        maxWidth: "28.875rem",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "0.625rem",
        boxShadow: "0px 6px 20px #00000024",
        flexDirection: "column",
    },
    summaryCardTop: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "1.625rem 1.625rem 0rem 1.625rem",
        "& > h1": {
            fontSize: "1.313rem",
            fontWeight: "600",
            color: primaryColor[1],

        }
    },
    summaryCardBottom: {
        display: "flex",
        alignItems: "center",
        gap: "1.625rem",
        marginTop: "2.125rem",
        paddingLeft: "4.25rem",
        "& > h1": {
            fontSize: "1.625rem",
            fontWeight: "600",
            color: "#6B6B6C",
        },
        "& > p": {
            fontSize: "1.313rem",
            color: "#969696",

        }
    },
    userListings: {
        ...faqStyle.faqCardBody,
        backgroundColor: "white",
        paddingTop: "2.125rem"
        // paddingLeft: "0rem",
        // paddingRight: "0rem",
    },
    columnView: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: grayColor[13],
        gap: "1.25rem",
        marginTop: "0px",
        height: "fit-content",
        width: "100%",
        height: "100%",
    },
    listingFilter: {
        ...listingsStyle.listingFilter,
        marginLeft: "1.875rem",

    },
    listingFilterSelected: {
        ...listingsStyle.listingFilterSelected,
    },
    listings: {
        ...listingsStyle.listings,
        marginLeft: "1.875rem",

    },
    listingCard: {
        ...listingsStyle.listingCard,
    },
    listingImage: {
        ...listingsStyle.listingImage,

    },
    listingDescription: {
        ...listingsStyle.listingDescription,
    },
    title: {
        ...listingsStyle.title
    },
    price: {
        ...listingsStyle.price
    },
    condition: {
        ...listingsStyle.condition
    },
    decisionButtons: {
        ...listingsStyle.decisionButton,
        marginRight: "3.75rem",
        marginLeft: "auto",
    },
    reject: {
        ...listingsStyle.reject,
    },
    pageSelector: {
        ...listingsStyle.pageSelector,
    },
}

export default userDetailsStyle;