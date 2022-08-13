import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import { primaryColor } from 'assets/jss/material-dashboard-react';
import { grayColor } from 'assets/jss/material-dashboard-react';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 58,
        height: 33,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(27px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: primaryColor[1],
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#4f7894',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 30,
        height: 31,
    },
    track: {
        borderRadius: 58 / 2,
        // border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: grayColor[1],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

export default IOSSwitch;