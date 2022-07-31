import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";

const styles = {
  grid: {
    padding: "0 15px !important",
  },
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const {
    children,
    className,
    muiClasses,
    ...rest
  } = props;
  const gridItemClasses = classNames({
    [classes.gridItem]: true,
    [className]: className,

  })
  return (
    <Grid item {...rest} className={gridItemClasses}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
};
