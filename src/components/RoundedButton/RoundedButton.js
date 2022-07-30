import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-dashboard-react/components/roundedbuttonStyle"
const useStyles = makeStyles(styles);
export default function RoundedButton(props) {
    const classes = useStyles();
    const {
        color,
        children,
        disabled,
        size,
        className,
        muiClasses,
        ...rest
    } = props;

    const btnClasses = classNames({
        [classes.button]: true,
        [classes[color]]: color,
        [classes[size]]: size,
        [classes.disabled]: disabled,
        [className]: className,
    });
    return (
        <Button  {...rest} className={btnClasses}>
            {children}
        </Button>
    )
}
RoundedButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "cancel",
        "gray",
        "danger",
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
    // use this to pass the classes props from Material-UI
    muiClasses: PropTypes.object,
    children: PropTypes.node,
};
