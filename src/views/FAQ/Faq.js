import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'
import styles from "assets/jss/material-dashboard-react/views/faqStyle";
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import { Button } from '@material-ui/core';
import CardBody from 'components/Card/CardBody';
import { FAQS } from 'dummyData/FAQ';
import { ReactComponent as RighArrow } from "assets/img/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/img/icon_left_arrowhead.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);
const Faq = () => {
    let history = useHistory();
    const classes = useStyles();
    const [showList, setShowList] = useState(true);
    const [selectedFaq, setSelectedFaq] = useState({ question: "", answer: "" })
    const [showModal, setShowModal] = useState(false);
    const useQuery = () => {
        const { search } = useLocation();

        return React.useMemo(() => new URLSearchParams(search), [search]);
    }
    let query = useQuery();

    //dummy funciton to get  faq from dummyFaq file
    const getFaq = (id) => {
        return FAQS.find((element, index) => index === parseInt(id))
    }

    React.useEffect(() => {
        if (query.get("id") === null) {
            setShowList(true)
        } else {

            setSelectedFaq(getFaq(query.get("id")))
            setShowList(false)
        }

    }, [query])
    return (
        <div>
            {showList ?
                <GridContainer>
                    <Card className={classes.faqCard}>
                        <CardHeader color="primary" className={classes.faqHeader}>

                            <h1 className={classes.faqCardHeading}>Frequently Asked Questions</h1>
                            <Button>Add</Button>
                        </CardHeader>
                        <CardBody className={classes.faqCardBody}>
                            {FAQS.map((faq, index) => {
                                return (
                                    <div
                                        className={classes.faqCardQuestions}
                                        key={index}
                                    >
                                        <Link className={classes.faqCardQuestion} to={`/admin/faq?id=${index}`}
                                        >
                                            {faq.question}
                                        </Link>
                                        <RighArrow />
                                    </div>

                                );
                            })}
                        </CardBody>
                    </Card>
                </GridContainer> :
                <GridContainer>
                    <Card className={classes.faqCard}>
                        <CardHeader color="primary" className={classes.faqHeader}>
                            <LeftArrow onClick={() => history.goBack()} style={{ cursor: 'pointer' }} />
                            <h1 className={classes.faqCardHeading}>{selectedFaq.question}</h1>
                            <Button onClick={() => { setShowModal(true) }}>Edit</Button>
                        </CardHeader>
                        <CardBody className={classes.faqCardBody}>
                            <div className={classes.faqAnswers}>
                                {selectedFaq.answer.map((sentence, index) => {
                                    return (

                                        <p key={index} className={classes.faqAnswer}>{sentence}</p>

                                    );
                                })}
                            </div>
                        </CardBody>
                    </Card>
                </GridContainer>
            }
        </div >
    )
}

export default Faq