import React from 'react'

import styles from "assets/jss/material-dashboard-react/components/modalStyle"
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(styles)
const Modal = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            {children}
        </div>
    )
}

export default Modal