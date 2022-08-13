import { blue, deepPurple, green, purple, red, yellow } from "@material-ui/core/colors";
import { primaryColor } from "assets/jss/material-dashboard-react";
import faqStyle from "./faqStyle";
import listingsStyle from "./listingsStyle";
const usersStyle = {
    userCard: {
        ...faqStyle.faqCard
    },
    userCardHeader: {
        ...faqStyle.faqCardHeader
    },
    userCardHeading: {
        ...faqStyle.faqCardHeading
    },
    userCardBody: {
        ...faqStyle.faqCardBody,
        minHeight: "fit-content",
        height: "100%",
    },
    userCardTable: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        boxSizeing: "border-box",
        padding: "0rem 2rem",
        "& thead": {
            width: "inherit",
            height: "fit-content",
            display: "flex",
            alignItems: "center",
            "& tr": {
                width: "inherit",
                display: "flex",
                gap: "1.25rem",
                borderBottom: "1px solid #f8f8f8",
                "& :nth-child(2)": {
                    flexGrow: 3,
                },
                "& :nth-child(-n+2)": {
                    justifyContent: "flex-start",
                },
                "& th": {
                    width: "12rem",
                    flex: "1",
                    borderBottom: "none",
                    fontSize: "1.5rem",
                    color: primaryColor[1],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }
            }

        },
        "& tbody": {
            width: "inherit",
            display: "flex",
            height: "fit-content",
            flexDirection: "column",
            "& tr": {
                width: "inherit",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid black",
                gap: "1.25rem",
                minHeight: "6.125rem",
                backgroundColor: "#f8f8f8",

                "& :nth-child(2)": {
                    flexGrow: 3,
                },
                "& :nth-child(-n+2)": {
                    justifyContent: "flex-start",
                },
                "& td": {
                    width: "12rem",
                    flex: "1",
                    borderBottom: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: '#434344',
                    fontSize: "1.313rem"
                }
            },
            "&> :nth-child(odd)": {
                backgroundColor: "#fff",
            }
        },
    },
    pageSelector: {
        ...listingsStyle.pageSelector,
        marginTop: "1.5rem",
        marginRight: "1.875rem",
    }
}

export default usersStyle;