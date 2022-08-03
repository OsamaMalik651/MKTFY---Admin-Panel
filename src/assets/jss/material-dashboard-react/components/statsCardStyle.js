import { successColor } from "assets/jss/material-dashboard-react";
import { whiteColor } from "assets/jss/material-dashboard-react";

export const statsCardStyle = {
    statsCard: {
        backgroundColor: whiteColor,
        marginTop: "3rem",
        width: "40.313rem",
        height: "24.25rem",
        postion: "relative"
    },
    statsCardHeader: {
        height: "18rem",
        width: "36.813rem",
        postion: "absolute",
        top: "1.5rem",
        right: "0.25rem",
        bottom: "2.25rem",
        borderRadius: "0.625rem !important",
        "& div": {
            height: "calc(100% - 1rem)",
            width: "inherit"
        }
    },
    statsCardBody: {
        // backgroundColor: "blue",
        marginTop: "2.5rem",
        padding: "0rem 1.815rem",
        "& > h5": {
            fontSize: "1.5rem",
            color: "#434344",
            fontWeight: "300"

        },
        "& > p": {
            fontSize: "1.125rem",
            color: "#434344",
            fontWeight: "300",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            "& span": {
                display: "flex",
                alignItems: "center",
                color: successColor[0],
                gap: "0.25rem",

            }
        }
    }
}

export default statsCardStyle;