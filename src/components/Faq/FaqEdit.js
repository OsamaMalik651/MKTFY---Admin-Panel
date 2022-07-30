import React, { useEffect, useState } from 'react'
import styles from "assets/jss/material-dashboard-react/components/faqEditStyle"
import { Button, makeStyles } from '@material-ui/core'
import GridContainer from 'components/Grid/GridContainer'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import CardBody from 'components/Card/CardBody'
import GridItem from 'components/Grid/GridItem'
import RoundedButton from 'components/RoundedButton/RoundedButton'
import { ReactComponent as CloseIcon } from "assets/img/icon_close.svg";

const useStyles = makeStyles(styles)
const FaqEdit = ({ close, faq, edit, onSave }) => {
    const classes = useStyles();
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")
    const [faqToEdit, setFaqToEdit] = useState(edit ? faq : { id: "", question: "", answer: "" })
    const [enableSaveButton, setEnableSaveButton] = useState(false)

    useEffect(() => {
        if (question.length >= 10 && answer.length >= 10) {
            setEnableSaveButton(true)
        } else setEnableSaveButton(false)

    }, [question, answer])

    const onEditChange = (evt) => {
        const value = evt.target.value
        setFaqToEdit({
            ...faqToEdit,
            [evt.target.name]: value
        })
    }
    const handleSave = () => {
        if (!edit) {
            onSave({ question, answer })

        } else {
            onSave(faqToEdit)

        }
        close()
    }
    return (
        <div>
            {edit ? <GridContainer>
                <Card className={classes.faqEditCard}>
                    <CardHeader color="primary" className={classes.faqHeader}>
                        <h1 className={classes.faqCardHeading}>Edit</h1>
                        <Button onClick={() => { close(false) }}><CloseIcon fill='white' /></Button>
                    </CardHeader>
                    <CardBody className={classes.faqCardBody}>
                        <GridItem>
                            <div className={classes.InputDiv}>
                                <label>Question</label>
                                <input name="question" value={faqToEdit.question} className={classes.Input} onChange={onEditChange} />
                            </div>
                        </GridItem>
                        <GridItem>
                            <div className={classes.TextAreaDiv}>
                                <label>Answer</label>
                                <textarea name="answer" value={faqToEdit.answer} className={classes.TextArea} onChange={onEditChange} />
                            </div>
                        </GridItem>
                        <RoundedButton color="primary" size="lg" className={classes.Button} onClick={handleSave}>Save Changes</RoundedButton>
                    </CardBody>
                </Card>
            </GridContainer> :
                <GridContainer>
                    <Card className={classes.faqEditCard}>
                        <CardHeader color="primary" className={classes.faqHeader}>
                            <h1 className={classes.faqCardHeading}>Add Question</h1>
                            <Button onClick={() => { close(false) }}><CloseIcon fill='white' /></Button>
                        </CardHeader>
                        <CardBody className={classes.faqCardBody}>
                            <GridItem>
                                <div className={classes.InputDiv}>
                                    <label>Question</label>
                                    <input placeholder='Type here' className={classes.Input} value={question} onChange={(e) => setQuestion(e.target.value)} />
                                </div>
                            </GridItem>
                            <GridItem>
                                <div className={classes.TextAreaDiv}>
                                    <label>Answer</label>
                                    <textarea placeholder='Type here' className={classes.TextArea} value={answer} onChange={(e) => setAnswer(e.target.value)} />
                                </div>
                            </GridItem>
                            <RoundedButton color={enableSaveButton ? "primary" : "cancel"} size="lg" className={classes.Button} onClick={handleSave} disabled={!enableSaveButton}>Save</RoundedButton>
                        </CardBody>
                    </Card>
                </GridContainer>
            }

        </div >
    )
}

export default FaqEdit