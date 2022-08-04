import { Icon } from "@material-ui/core";
import Card from "components/Card/Card";
import CardFooter from "components/Card/CardFooter";
import CardHeader from "components/Card/CardHeader";
import CardIcon from "components/Card/CardIcon";
import GridContainer from "components/Grid/GridContainer";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import GridItem from "components/Grid/GridItem";
import CardBody from "components/Card/CardBody";
import { grayColor } from "assets/jss/material-dashboard-react";
import StatsCard from "components/StatsCard/StatsCard";
import { ReactComponent as ListingIcon } from "assets/img/tag.svg";
import { ReactComponent as UserIcon } from "assets/img/users.svg";
// import { ReactComponent as DollarIcon } from "assets/img/dollar-icon.svg";
import { FiDollarSign } from "react-icons/fi";

const useStyles = makeStyles(styles);
const CustomDashboard = () => {
    const classes = useStyles();

    //move this function to helper file
    const date = () => {
        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: "numeric" };
        return (
            <h2 style={{ marginTop: 0, paddingBottom: "2rem", color: grayColor[14] }}>Today, {today.toLocaleDateString("en-US", options)}</h2>
        )
    }
    return <div>
        <div className="" >
            {date()}
        </div>
        <GridContainer>
            <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.infoCard}>
                    <CardHeader color="warning" icon stats>
                        <CardIcon color="warning">
                            <Icon style={{ fontSize: "3rem" }} component={UserIcon} />
                        </CardIcon>
                        <p className={classes.cardCategory}>Total Users</p>
                    </CardHeader>
                    <CardBody className={classes.infoCardBody}>
                        <h3 className={classes.cardTitle}>
                            250
                        </h3>
                        <p>Buyers and Sellers</p>
                    </CardBody>
                    <CardFooter stats>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.infoCard}>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            <Icon style={{ fontSize: "1rem" }} component={ListingIcon} />
                        </CardIcon>
                        <p className={classes.cardCategory}>All Listings</p>
                    </CardHeader>
                    <CardBody className={classes.infoCardBody}>
                        <h3 className={classes.cardTitle}>
                            500
                        </h3>
                        <p>This month</p>
                    </CardBody>
                    <CardFooter stats>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.infoCard}>
                    <CardHeader color="warning" stats icon>
                        <CardIcon color="warning">
                            <Icon style={{ fontSize: "3rem", transform: "scaleX(-1)" }}>person_add_outlined_icon</Icon>
                        </CardIcon>
                        <p className={classes.cardCategory}>New Users</p>
                    </CardHeader>
                    <CardBody className={classes.infoCardBody}>
                        <h3 className={classes.cardTitle}>
                            + 45
                        </h3>
                        <p>Today</p>
                    </CardBody>
                    <CardFooter stats>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
                <Card className={classes.infoCard}>
                    <CardHeader color="warning" stats icon >
                        <CardIcon color="warning">
                            <FiDollarSign style={{ width: "46px", height: "auto" }} />
                        </CardIcon>
                        <p className={classes.cardCategory}>Avg Sales</p>
                    </CardHeader>
                    <CardBody className={classes.infoCardBody}>
                        <h3 className={classes.cardTitle}>
                            1000
                        </h3>
                        <p>Per day</p>
                    </CardBody>
                    <CardFooter stats className={classes.infoCardFooter}>
                        <p>Calculated over the last year</p>
                    </CardFooter>
                </Card>
            </GridItem>
            <GridItem>
                <StatsCard />
            </GridItem>
        </GridContainer>
    </div >;
};

export default CustomDashboard;
