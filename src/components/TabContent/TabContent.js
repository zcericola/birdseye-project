/* eslint react/prop-types: 0 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './tabContentStyles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const TabContent = ( { children } ) => {
    const {
        contentContainer
    } = useStyles();
    return (
        <Grid
            item
            className={contentContainer}
        >
            {children}
        </Grid>


    );

};

export default TabContent;