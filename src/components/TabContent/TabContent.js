/* eslint react/prop-types: 0 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './tabContentStyles';




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