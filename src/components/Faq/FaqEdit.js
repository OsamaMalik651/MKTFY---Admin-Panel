import React, { useState } from 'react'
import styles from "assets/jss/material-dashboard-react/components/faqEditStyle"
import { Button, makeStyles } from '@material-ui/core'
import GridContainer from 'components/Grid/GridContainer'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
const useStyles = makeStyles(styles)
const FaqEdit = ({ close, faq }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <Card className={classes.faqEditCard}>
                    <CardHeader color="primary" className={classes.faqHeader}>
                        <h1 className={classes.faqCardHeading}>Edit</h1>
                        <Button onClick={() => { close(false) }}>close</Button>
                    </CardHeader>
                    <CardBody className={classes.faqCardBody}>
                        <div className=""></div>
                        <GridItem>
                            <div className={classes.InputDiv}>
                                <label>Question</label>
                                <input value={faq.question} className={classes.Input} />
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.TextAreaDiv}>
                                <label>Answer</label>
                                <textarea value={faq.answer.join("\r\n")} className={classes.TextArea} />
                            </div>
                        </GridItem>
                    </CardBody>
                </Card>
            </GridContainer>
        </div >
    )
}

export default FaqEdit