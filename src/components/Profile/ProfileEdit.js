import React from 'react'
import styles from "assets/jss/material-dashboard-react/components/profileEditStyle";
import { Button, makeStyles } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import { ReactComponent as CloseIcon } from "assets/img/icon_close.svg";
import CardBody from 'components/Card/CardBody';
import RoundedButton from 'components/RoundedButton/RoundedButton';



const useStyles = makeStyles(styles);
const ProfileEdit = ({ close }) => {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <Card className={classes.profileEditCard}>
                    <CardHeader color="primary" className={classes.profileHeader}>
                        <h1 className={classes.profileCardHeading}>Edit</h1>
                        <Button onClick={() => { close(false) }}><CloseIcon fill='white' /></Button>
                    </CardHeader>
                    <CardBody className={classes.profileCardBody}>
                        <div className={classes.smallInputs}>
                            <div className={classes.InputDiv}>
                                <label>First Name</label>
                                <input name="firstName" value="MKTFY" className={classes.Input} />
                            </div>
                            <div className={classes.InputDiv}>
                                <label>Last Name</label>
                                <input name="lastName" value="Admin" className={classes.Input} />
                            </div>
                        </div>
                        <div className={classes.InputDiv}>
                            <label>Email</label>
                            <input name="email" value=""
                                type="email"
                                className={classes.Input} />
                        </div>
                        <div className={classes.smallInputs}>
                            <RoundedButton color="cancel"
                                outline
                                size="md"
                            >Change Password</RoundedButton>
                            <RoundedButton
                                color="primary"
                                size="md"
                            >
                                Save Changes
                            </RoundedButton>
                        </div>
                    </CardBody>
                </Card>
            </GridContainer>
        </div>
    )
}

export default ProfileEdit