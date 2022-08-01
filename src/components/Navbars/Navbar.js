import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons

// core components

import { ReactComponent as DropDownArrow } from "assets/img/chevron-down.svg"
import { ReactComponent as SearchIcon } from "assets/img/search-icon.svg"
//hooks
import { useRouteName } from "hooks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const [showDropDown, setShowDropDown] = useState(false)
  const classes = useStyles();
  const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div>
          {/* Here we create navbar brand, based on route name */}
          <p className={classes.title}>
            {routeName}
          </p>
        </div>
        {routeName !== "Dashboard" &&
          <div className={classes.searchBar}>
            <input placeholder="Search" />
            <SearchIcon />
          </div>
        }
        <div className={classes.adminButton}>
          <p>
            <span>MKTFY</span> ADMIN
          </p>
          <DropDownArrow onClick={() => { setShowDropDown(!showDropDown) }} />
        </div>
        {showDropDown && <div className={classes.adminOptions}>
          <h3>
            MKTFY ADMIN
          </h3>
          <p>Edit Profile</p>
          <div className={classes.adminLogout}>
            <p>Logout</p>
          </div>
        </div>}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
