import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
    return (
        <Grid
            container
            className="dashboard-container"
        >
            <List />
            <Search />


        </Grid> );

};

export default Dashboard;