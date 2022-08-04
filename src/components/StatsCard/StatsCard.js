import React from 'react'
import styles from "assets/jss/material-dashboard-react/components/statsCardStyle"
import { Icon, makeStyles } from '@material-ui/core'
import Card from 'components/Card/Card'
import CardFooter from 'components/Card/CardFooter'
import CardHeader from 'components/Card/CardHeader'
import GraphImage from "assets/img/graphImg.svg"
import CardBody from 'components/Card/CardBody'
import TrendingUp from '@material-ui/icons/TrendingUp'
import { successColor } from 'assets/jss/material-dashboard-react'
import ChartistGraph from 'react-chartist'
import { dailySalesChart } from 'variables/charts'

const useStyles = makeStyles(styles)
const StatsCard = () => {
    const classes = useStyles()
    return (
        <Card chart>
            <CardHeader stats color="primary" className={classes.statsCardHeader}>
                <ChartistGraph
                    className="ct-chart"
                    data={dailySalesChart.data}
                    type="Line"
                    options={dailySalesChart.options}
                    listener={dailySalesChart.animation} />
            </CardHeader>
            <CardBody className={classes.statsCardBody}>
                <h5>Sales Per day over a month</h5>
                <p>
                    <span><TrendingUp style={{ color: successColor[0] }} /> 68%</span> Increase in this week deals</p>
            </CardBody>
            <CardFooter stats>
            </CardFooter>
        </Card>
    )
}

export default StatsCard