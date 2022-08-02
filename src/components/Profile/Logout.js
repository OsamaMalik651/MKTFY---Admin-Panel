import Card from 'components/Card/Card'
import CardBody from 'components/Card/CardBody'
import CardHeader from 'components/Card/CardHeader'
import GridContainer from 'components/Grid/GridContainer'
import React from 'react'
import styles from "assets/jss/material-dashboard-react/components/profileEditStyle";
import { makeStyles } from '@material-ui/core'
import RoundedButton from 'components/RoundedButton/RoundedButton'

const useStyles = makeStyles(styles);
const Logout = ({ close }) => {
    const classes = useStyles();

    return (
        <GridContainer>
            <Card className={classes.logoutCard}>
                <CardHeader color="primary" className={classes.logoutCardHeader}>
                    <h1 className={classes.profileCardHeading}>Logout</h1>
                </CardHeader>
                <CardBody className={classes.logoutCardBody} >
                    <p>
                        Do you really want to logout from your account?
                    </p>
                    <div className={classes.smallButtonInputs}>
                        <RoundedButton
                            size="sm"
                            outline
                            color="cancel"
                            onClick={close}
                        > cancel</RoundedButton>
                        <RoundedButton
                            size="sm"
                            color="primary"
                        >
                            Logout
                        </RoundedButton>
                    </div>
                </CardBody>
            </Card>
        </GridContainer>
    )
}

export default Logout