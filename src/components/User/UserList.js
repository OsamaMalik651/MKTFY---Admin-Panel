import React, { useEffect, useState } from 'react'
import { ReactComponent as NavForward } from "assets/img/Icon_nav_forward.svg"
import { ReactComponent as NavBackward } from "assets/img/icon_nav_back.svg"
import styles from "assets/jss/material-dashboard-react/components/usersList.js";
import { makeStyles } from '@material-ui/core/styles'
import GridContainer from 'components/Grid/GridContainer';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import GridItem from 'components/Grid/GridItem';
import { users } from 'dummyData/USERS';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

const UserList = () => {
  const classes = useStyles();
  let history = useHistory();
  const [pageNumber, setPageNumber] = useState(0)
  const [disableForwardNav, setDisableForwardNav] = useState(false);
  const [disableBackwardNav, setDisableBackwardNav] = useState(false);
  const [usersList, setUsersList] = useState(users);
  useEffect(() => {
    if (pageNumber === 0) {
      setDisableBackwardNav(true)
      setDisableForwardNav(false)
    } else {
      setDisableBackwardNav(false)
      let listLength = usersList.length
      if (listLength <= 6 * (pageNumber + 1)) {
        setDisableForwardNav(true)
      }
    }
  }, [pageNumber])

  const onUserSelect = (userId) => {
    history.push(`/admin/user/${userId}`)
  }
  return (
    <div>
      <GridContainer>
        <Card className={classes.userCard}>
          <CardHeader color="primary" className={classes.userCardHeader}>
            <h1 className={classes.userCardHeading}>Users</h1>
          </CardHeader>
          <CardBody className={classes.userCardBody}>

            <TableContainer>
              <Table className={classes.userCardTable}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Active Listing</TableCell>
                    <TableCell>Purchases</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usersList
                    .slice(6 * pageNumber, 6 * (pageNumber + 1))
                    .map((user, index) => {
                      return (
                        <TableRow key={index} onClick={() => onUserSelect(user.id)}>
                          <TableCell align='left'>{user.firstName + " " + user.lastName}</TableCell>
                          <TableCell align='left'> {user.email}</TableCell>
                          <TableCell>{user.location}</TableCell>
                          <TableCell>{user.activeListings}</TableCell>
                          <TableCell>{user.purchases}</TableCell>
                        </TableRow>
                      )
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <GridItem className={classes.pageSelector}>
              <button disabled={disableBackwardNav} onClick={() => { pageNumber > 0 && setPageNumber(pageNumber - 1) }}>
                <NavBackward />
              </button>
              <p>{pageNumber + 1}</p>
              <button disabled={disableForwardNav} onClick={() => setPageNumber(pageNumber + 1)}>
                <NavForward />
              </button>
            </GridItem>
          </CardBody>
        </Card>
      </GridContainer>
    </div>
  )
}

export default UserList
