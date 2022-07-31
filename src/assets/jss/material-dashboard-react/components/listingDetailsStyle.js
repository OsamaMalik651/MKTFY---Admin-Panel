import { grayColor } from "assets/jss/material-dashboard-react";
import { whiteColor } from "assets/jss/material-dashboard-react";

const ListingDetailsStyle = {
    ListingDetailsCard: {
        backgroundColor: whiteColor,
        height: "100%",
        width: "690px",
        border: `1px solid #F2F2F2`,
        boxShadow: `0px 1px 0px ${grayColor[3]}`,
        borderRadius: "0.625rem",
        overflowY: "scroll",
        display: "flex",
        "& *": {
            margin: 0,
            padding: 0
        }
    },
    mainImage: {
        width: "inherit",
        height: "30.875rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& img": {
            boxSizing: "border-box",
            width: "100%",
            height: "inherit",
            border: `1px solid ${grayColor[4]}`,
            borderRadius: "10px 10px 0px 0px",
        }
    },
    details: {
        width: "inherit",
        padding: "1.125rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.125rem",
    },
    images: {
        width: "fit-content",
        display: "flex",
        gap: "1.125rem",
        "& img": {
            maxWidth: "7.375rem",
            height: "7.375rem",
            border: `1px solid ${grayColor[4]}`,
            borderRadius: "0.25rem"
        },
    },
    description: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.125rem"
    },
    InputText: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "0.375rem",
        height: "fit-content",
        fontFamily: "open sans",
        "& label": {
            color: grayColor[11],
            fontSize: "0.875rem"
        },
        "& input": {
            fontSize: "1rem",
            height: "3.375rem",
            paddingLeft: "1rem",
            border: `1px solid ${grayColor[4]}`,
            borderRadius: "0.25rem",
            backgroundColor: whiteColor,
            textTransform: "capitalize"

        },
        "& textarea": {
            height: "7rem",
            resize: "none",
            backgroundColor: whiteColor,
            border: `1px solid ${grayColor[3]}`,
            borderRadius: "0.25rem",
            padding: "1.25rem 1.125rem",
            color: grayColor[11],
            fontSize: "1rem",
            fontFamily: "open sans"
        },
        "& svg": {
            position: "absolute",
            top: "3.375rem",
            right: "0.625rem"
        }

    },
    SmallInputs: {
        display: "flex",
        width: "inherit",
        justifyContent: "space-between",
        "& div": {
            width: "19.375rem"
        },
        "& button": {
            width: "310px"
        }
    },


}

export default ListingDetailsStyle;