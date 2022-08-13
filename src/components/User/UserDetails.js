import React, { useEffect, useState } from 'react'
import Card from 'components/Card/Card'
import CardHeader from 'components/Card/CardHeader'
import GridContainer from 'components/Grid/GridContainer'

import { ReactComponent as LeftArrow } from "assets/img/icon_left_arrowhead.svg"
import { ReactComponent as BlockIcon } from "assets/img/slash.svg"
import { ReactComponent as ShoppingBagIcon } from "assets/img/shopping-bag.svg"
import { ReactComponent as DollarIcon } from "assets/img/dollar-sign.svg"



import { getUserById } from 'dummyData/USERS'
import { dummyListings } from "dummyData/Listings"
import PlaceHolderImage from "assets/img/placeholder-image.png"
import { ReactComponent as ApproveIcon } from "assets/img/check-square.svg";
import { ReactComponent as RejectIcon } from "assets/img/icon_close.svg"
import { ReactComponent as NavForward } from "assets/img/Icon_nav_forward.svg"
import { ReactComponent as NavBackward } from "assets/img/icon_nav_back.svg"
import { dangerColor } from 'assets/jss/material-dashboard-react'


import { useParams } from 'react-router-dom'

import styles from "assets/jss/material-dashboard-react/components/userDetailsStyle.js";
import { makeStyles } from '@material-ui/core/styles'
import CardBody from 'components/Card/CardBody'
import IOSSwitch from 'components/Switch/IOSSwitch'
import Listings from 'views/Listings/Listings'
import GridItem from 'components/Grid/GridItem'
import Modal from 'components/Modal.js/Modal'
import ListingDetails from 'components/ListingDetails/ListingDetails'
import { useHistory } from 'react-router-dom'
const useStyles = makeStyles(styles);

const UserDetails = ({ searchTerm }) => {
    const classes = useStyles();
    let { userId } = useParams()
    let history = useHistory();
    const { firstName, lastName, location } = getUserById(userId)
    const [listings, setListings] = useState(dummyListings.cars);
    const [selectedListing, setSelectedListing] = useState({})
    const [showModal, setShowModal] = useState(false);
    const [deleteListing, setDeleteListing] = useState(false);



    const [block, setBlock] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [disableForwardNav, setDisableForwardNav] = useState(false);
    const [disableBackwardNav, setDisableBackwardNav] = useState(false);
    const [activeItems, setActiveItems] = useState(true);

    useEffect(() => {
        if (pageNumber === 0) {
            setDisableBackwardNav(true)
            setDisableForwardNav(false)
        } else {
            setDisableBackwardNav(false)
            let listingLength = listings.length
            if (listingLength <= 3 * (pageNumber + 1)) {
                setDisableForwardNav(true)
            }
        }
    }, [pageNumber])
    const showActiveItems = () => {
        setPageNumber(0)
        setActiveItems(true)
        // setPendingItems(false)
    }
    const showSoldItems = () => {
        setPageNumber(0)
        setActiveItems(false)
    }
    const onDeleteClick = (listing) => {
        setSelectedListing(listing);
        setDeleteListing(true)
        setShowModal(true)
    }
    const DeleteListing = (listingId) => {
        console.log(listingId)
        setShowModal(false)
        setSelectedListing({})
        setDeleteListing(false)
    }
    return (
        <div>
            <GridContainer >
                <Card className={classes.userCard}>
                    <CardHeader color="primary" className={classes.userDetailsCardHeader}>
                        <LeftArrow onClick={() => history.goBack()} />
                        <div className={classes.userDetails}>
                            <h1>{firstName + " " + lastName}</h1>
                            <p>{location}</p>
                        </div>
                    </CardHeader>
                    <CardBody className={classes.userCardBody}>
                        <div className={classes.userSummaryCard}>
                            <div className={classes.summaryCardTop}>
                                <BlockIcon />
                                <h1>Block/ Unblock User</h1>
                            </div>
                            <div className={classes.summaryCardBottom}>
                                <p>Block</p>
                                <IOSSwitch checked={block}
                                    onChange={() => setBlock(!block)}
                                    name="checkedB" />
                            </div>
                        </div>
                        <div className={classes.userSummaryCard}>
                            <div className={classes.summaryCardTop}>
                                <ShoppingBagIcon />
                                <h1>Total Purchases</h1>
                            </div>
                            <div className={classes.summaryCardBottom}>
                                <h1>120</h1>
                                <p>Bought Items</p>

                            </div>
                        </div>
                        <div className={classes.userSummaryCard}>
                            <div className={classes.summaryCardTop}>
                                <DollarIcon />
                                <h1>Total Sales</h1>
                            </div>
                            <div className={classes.summaryCardBottom}>
                                <h1>120</h1>
                                <p>Sale Items</p>
                            </div>
                        </div>
                    </CardBody>
                    <CardBody className={classes.userListings}>
                        <GridContainer className={classes.columnView}>
                            <GridItem >
                                <div className={classes.listingFilter}>
                                    <p onClick={showActiveItems} className={activeItems ? classes.listingFilterSelected : ""}>User Listings</p>
                                    <p onClick={showSoldItems} className={!activeItems ? classes.listingFilterSelected : ""}>Purchased Listings</p>
                                </div>
                            </GridItem>
                            <GridItem className={classes.listings}>
                                {activeItems ? listings
                                    .slice(3 * (pageNumber), 3 * (pageNumber + 1))
                                    .map((listing) => {
                                        return (
                                            <GridItem className={classes.columnView} key={listing.id}>
                                                <div className={classes.listingCard}>
                                                    <img src={PlaceHolderImage} alt="" className={classes.listingImage} />
                                                    <div className={classes.listingDescription}>
                                                        <p className={classes.title}>{listing.title}</p>
                                                        <p className={classes.price}>$ {listing.price}</p>
                                                        <p className={classes.condition}>{listing.condition}</p>
                                                    </div>
                                                    <div className={classes.decisionButtons}>
                                                        <div className={classes.reject} onClick={() => onDeleteClick(listing)}>
                                                            <RejectIcon fill={dangerColor[0]} />
                                                            <p>Delete</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </GridItem>
                                        )
                                    }) : listings
                                        .slice(3 * (pageNumber), 3 * (pageNumber + 1))
                                        .map((listing) => {
                                            return (
                                                <GridItem className={classes.columnView} key={listing.id}>
                                                    <div className={classes.listingCard}>
                                                        <img src={PlaceHolderImage} alt="" className={classes.listingImage} />
                                                        <div className={classes.listingDescription}>
                                                            <p className={classes.title}>{listing.title}</p>
                                                            <p className={classes.price}>$ {listing.price}</p>
                                                            <p className={classes.condition}>{listing.condition}</p>
                                                        </div>
                                                    </div>
                                                </GridItem>
                                            )
                                        })}
                            </GridItem>
                            <GridItem className={classes.pageSelector}>
                                <button disabled={disableBackwardNav} onClick={() => { pageNumber > 0 && setPageNumber(pageNumber - 1) }}>
                                    <NavBackward />
                                </button>
                                <p>{pageNumber + 1}</p>
                                <button disabled={disableForwardNav} onClick={() => setPageNumber(pageNumber + 1)}>
                                    <NavForward />
                                </button>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
                {
                    (showModal && deleteListing) && <Modal>
                        <ListingDetails
                            onCancel={() => {
                                setSelectedListing({});
                                setDeleteListing(false);
                                setShowModal(false)
                            }}
                            onDelete={DeleteListing}
                            deleteListing={true}
                            listing={selectedListing}
                        />
                    </Modal>
                }
            </GridContainer>
        </div>
    )
}

export default UserDetails
