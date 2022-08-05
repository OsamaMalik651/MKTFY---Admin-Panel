import { makeStyles } from '@material-ui/styles'
import React, { useCallback, useState } from 'react'
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
import Modal from 'components/Modal.js/Modal';
import FaqEdit from 'components/Faq/FaqEdit';
import RoundedButton from 'components/RoundedButton/RoundedButton';
import { getFaqs, getFaq, createFaq, updateFaq } from 'services';
// import { createFaq } from 'services';

const useStyles = makeStyles(styles);
const Faq = ({ searchTerm }) => {
    let history = useHistory();
    const classes = useStyles();
    const [showList, setShowList] = useState(true);
    const [selectedFaq, setSelectedFaq] = useState({ question: "", answer: "" })
    const [faq, setFaq] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const useQuery = () => {
        const { search } = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    let query = useQuery();

    //functions to get FAQs
    const createNewFaq = async (faqObject) => {
        const response = await createFaq(faqObject);
    }

    const updateAFaq = async (faqObject) => {
        const response = await updateFaq(faqObject);
        setSelectedFaq(response)
    }

    const getfaqData = async () => {
        const response = await getFaqs();
        setFaq(response);
    }

    const getSingleFaq = async () => {
        const response = await getFaq(query.get('id'));
        setSelectedFaq(response);
    }

    //When the add modal is closed, get the updated list of FAQs
    React.useEffect(() => {
        !showModal && getfaqData();
    }, [showModal]);

    //When the edit modal is closed, get the updated list of FAQs
    React.useEffect(() => {
        //isMounted is used here to updated the state only when the component is mounted
        let isMounted = true;

        if (query.get("id") === null) {
            setShowList(true)
        } else {
            isMounted && getSingleFaq()
            setShowList(false)
        }
        return () => {
            // when component unmounts, set isMounted to false
            isMounted = false;
        };

    }, [query])

    React.useEffect(() => {
        if (searchTerm !== "") {
            const filteredFaqs = faq.filter(faq => faq.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFaq(filteredFaqs)
        } else {
            getfaqData()
        }
    }, [searchTerm])

    return (
        <div>
            {showList ?
                <GridContainer>
                    <Card className={classes.faqCard}>
                        <CardHeader color="primary" className={classes.faqHeader}>

                            <h1 className={classes.faqCardHeading}>Frequently Asked Questions</h1>
                            <RoundedButton size="sm" color="secondary" onClick={() => { setShowModal(true) }}>Add</RoundedButton>
                        </CardHeader>
                        <CardBody className={classes.faqCardBody}>
                            {faq?.map((faq) => {
                                return (
                                    <div
                                        className={classes.faqCardQuestions}
                                        key={faq.id}
                                    >
                                        <Link className={classes.faqCardQuestion} to={`/admin/faq?id=${faq.id}`}
                                        >
                                            {faq.title}
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
                            <h1 className={classes.faqCardHeading}>{selectedFaq?.title}</h1>
                            <RoundedButton onClick={() => { setShowModal(true) }} color="secondary" size="sm">Edit</RoundedButton>
                        </CardHeader>
                        <CardBody className={classes.faqCardBody}>
                            <div className={classes.faqAnswers}>
                                {selectedFaq.description?.split(".").map((sentence, index) => {
                                    return (
                                        <p key={index} className={classes.faqAnswer}>{sentence}</p>
                                    );
                                })}
                            </div>
                        </CardBody>
                    </Card>
                </GridContainer>
            }
            {showModal && <Modal>
                {!showList ?
                    <FaqEdit close={setShowModal} faq={selectedFaq} edit onSave={(faqObject) => updateAFaq(faqObject)} /> :
                    <FaqEdit close={setShowModal} onSave={(faqObject) => createNewFaq(faqObject)} />
                }
            </Modal>
            }
        </div >
    )
}

export default Faq