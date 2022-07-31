import GridContainer from 'components/Grid/GridContainer'
import React from 'react'
import PlaceHolderImage from "assets/img/placeholder-image.png"
import { ReactComponent as DropDownArrow } from "assets/img/dropdownarrow.svg"
import styles from "assets/jss/material-dashboard-react/components/listingDetailsStyle"
import { makeStyles } from "@material-ui/core/styles";
import { grayColor } from 'assets/jss/material-dashboard-react'
import { primaryColor } from 'assets/jss/material-dashboard-react'
import RoundedButton from 'components/RoundedButton/RoundedButton'


const useStyles = makeStyles(styles);
const ListingDetails = ({ onApprove, onReject, onCancel, onDelete, listing, deleteListing, approveListing }) => {

    const classes = useStyles();
    return (
        <GridContainer className={classes.ListingDetailsCard}>
            <div className={classes.mainImage}>
                <img src={PlaceHolderImage || listing.images[0]} alt="" />
            </div>
            <div className={classes.details}>
                <div className={classes.images}>
                    <img src={PlaceHolderImage} alt="" />
                    <img src={PlaceHolderImage} alt="" />
                    <img src={PlaceHolderImage} alt="" />
                </div>
                <div className={classes.description}>
                    <div className={classes.InputText}>
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" name="productName" value={listing.title} disabled />
                    </div>
                    <div className={classes.InputText}>
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" value={listing.description} disabled />
                    </div>
                    <div className={classes.InputText}>
                        <label htmlFor="category">Category</label>
                        <input type="text" name="category" value={listing.category} disabled></input>
                        <DropDownArrow fill={primaryColor[4]} />
                    </div>
                    <div className={classes.SmallInputs}>
                        <div className={classes.InputText}>
                            <label htmlFor="condition">Condition</label>
                            <input type="text" name="condition" value={listing.condition} disabled />
                            <DropDownArrow fill={primaryColor[4]} />
                        </div>
                        <div className={classes.InputText}>
                            <label htmlFor="price">Price</label>
                            <input type="text" name="price" value={`$ ${listing.price}`} disabled />
                            <DropDownArrow fill={primaryColor[4]} />
                        </div>
                    </div>
                    <div className={classes.InputText}>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" value={listing.address} disabled />
                    </div>
                    <div className={classes.InputText}>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" value={listing.city} disabled />
                        <DropDownArrow fill={primaryColor[4]} />
                    </div>
                    {approveListing && <div className={classes.SmallInputs}>
                        <RoundedButton color="cancel" outline onClick={onReject}>Reject</RoundedButton>
                        <RoundedButton
                            color="primary"
                            onClick={() => onApprove(listing.id)}
                        >
                            Approve
                        </RoundedButton>
                    </div>}

                    {deleteListing &&
                        <div className={classes.SmallInputs}>
                            <RoundedButton color="cancel" outline onClick={onCancel}>Cancel</RoundedButton>
                            <RoundedButton
                                color="danger"
                                onClick={() => onDelete(listing.id)}
                            >
                                Delete
                            </RoundedButton>
                        </div>
                    }
                </div>
            </div>
        </GridContainer >
    )
}

export default ListingDetails