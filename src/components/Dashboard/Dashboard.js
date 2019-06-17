import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';
import Grid from '@material-ui/core/Grid';
import useStyles from './dashboardStyles';

const Dashboard = () => {
    const { dashboardContainer } = useStyles();
    return (
        <Grid
            container
            className={dashboardContainer}

        >
            < List listTitle='Tasks' />
            <Search />

        </Grid > );

};

export default Dashboard;