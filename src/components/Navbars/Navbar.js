import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";
import { ReactComponent as DropDownArrow } from "assets/img/chevron-down.svg"
import { ReactComponent as SearchIcon } from "assets/img/search-icon.svg"
//hooks
import { useRouteName } from "hooks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import Modal from "components/Modal.js/Modal.js";
import ProfileEdit from "components/Profile/ProfileEdit.js";
import Logout from "components/Profile/Logout.js";


const useStyles = makeStyles(styles);

export default function Header(props) {

  const classes = useStyles();
  const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });

  const [showDropDown, setShowDropDown] = useState(false)
  const [showProfileEditModal, setShowProfileEditModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
            <input placeholder="Search" onChange={(e) => props.onChange(e.target.value)} value={props.value} />
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
          <p onClick={() => { setShowProfileEditModal(true); setShowDropDown(false) }}>Edit Profile</p>
          <div className={classes.adminLogout}>
            <p onClick={() => { setShowLogoutModal(true); setShowDropDown(false) }}>Logout</p>
          </div>
        </div>}
      </Toolbar>
      {showProfileEditModal && <Modal>
        <ProfileEdit close={() => { setShowProfileEditModal(false) }} />
      </Modal>}
      {showLogoutModal && <Modal>
        <Logout close={() => { setShowLogoutModal(false) }} />
      </Modal>}
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
