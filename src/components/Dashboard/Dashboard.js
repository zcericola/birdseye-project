import React from 'react';
import Search from '../Search/Search';
import Tasks from '../Tasks/Tasks';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
    return (
        <Grid
            container
            className="dashboard-container"
        >
            <Tasks />
            <Search />


        </Grid> );

};

export default Dashboard;