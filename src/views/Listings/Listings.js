import GridContainer from 'components/Grid/GridContainer'
import GridItem from 'components/Grid/GridItem'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import PlaceHolderImage from "assets/img/placeholder-image.png"
import { ReactComponent as ApproveIcon } from "assets/img/check-square.svg";
import { ReactComponent as RejectIcon } from "assets/img/icon_close.svg"
import { ReactComponent as NavForward } from "assets/img/Icon_nav_forward.svg"
import { ReactComponent as NavBackward } from "assets/img/icon_nav_back.svg"

import styles from "assets/jss/material-dashboard-react/views/listingsStyle";
import { dangerColor } from 'assets/jss/material-dashboard-react'
import { dummyListings } from "dummyData/Listings"
import ListingDetails from 'components/ListingDetails/ListingDetails'
import Modal from 'components/Modal.js/Modal'
import { useEffect } from 'react'
const useStyles = makeStyles(styles);

const Listings = () => {
    const classes = useStyles();
    const [activeItems, setActiveItems] = useState(true);
    const [listings, setListings] = useState([])
    const [selectedListing, setSelectedListing] = useState({})
    const [approveListing, setApproveListing] = useState(false);
    const [deleteListing, setDeleteListing] = useState(false);
    const [pageNumber, setPageNumber] = useState(0)
    const [disableForwardNav, setDisableForwardNav] = useState(false);
    const [disableBackwardNav, setDisableBackwardNav] = useState(false);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        if (activeItems) {
            let listingsToDisplay = dummyListings.cars.filter((listing => listing.pending === false))
            setListings(listingsToDisplay)
            setDisableBackwardNav(false);
            setDisableForwardNav(false)
        } else {
            let listingsToDisplay = dummyListings.cars.filter((listing => listing.pending === true))
            setListings(listingsToDisplay)
            setDisableBackwardNav(false);
            setDisableForwardNav(false)
        }

    }, [activeItems])

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

    // backend logic goes here
    const onApproveClick = (listing) => {
        setSelectedListing(listing);
        setApproveListing(true)
        setShowModal(true)
    }
    const onRejectClick = () => {
        setShowModal(false)
        console.log("rejectFunctionClicked")
    }
    const onDeleteClick = (listing) => {
        setSelectedListing(listing);
        setDeleteListing(true)
        setShowModal(true)
    }
    const ApproveListing = (listingId) => {
        console.log(listingId)
        setShowModal(false),
            setSelectedListing({})
        setApproveListing(false)

    }
    const DeleteListing = (listingId) => {
        console.log(listingId)
        setShowModal(false)
        setSelectedListing({})
        setDeleteListing(false)
    }
    return (
        <GridContainer className={classes.columnView}>
            <GridItem >
                <div className={classes.listingFilter}>
                    <p onClick={showActiveItems} className={activeItems ? classes.listingFilterSelected : ""}>Active</p>
                    <p onClick={showSoldItems} className={!activeItems ? classes.listingFilterSelected : ""}>Pending</p>
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
                                    {listing.pending && <div className={classes.stateTag}>
                                        <p>Pending State</p>
                                    </div>}
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
                                        {listing.pending && <div className={classes.stateTag}>
                                            <p>Pending State</p>
                                        </div>}
                                        <div className={classes.decisionButtons}>
                                            <div className={classes.approve} onClick={() => { onApproveClick(listing) }}>
                                                <ApproveIcon />
                                                <p>Sold</p>
                                            </div>
                                            <div className={classes.reject} onClick={onRejectClick}>
                                                <RejectIcon fill={dangerColor[0]} />
                                                <p>Reject</p>
                                            </div>
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
            {
                (showModal && approveListing) && <Modal>
                    <ListingDetails
                        onReject={() => {
                            setSelectedListing({});
                            setShowModal(false);
                            setApproveListing(false)
                        }}
                        onApprove={ApproveListing}
                        approveListing
                        listing={selectedListing}
                    />
                </Modal>
            }
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
        </GridContainer >
    )
}

export default Listings