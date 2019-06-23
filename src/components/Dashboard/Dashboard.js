import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';
import Grid from '@material-ui/core/Grid';
import useStyles from './dashboardStyles';
import { allTasks, todayTasks } from '../../data/exampleTasks';
import moment from 'moment';

const Dashboard = () => {
    const {
        dashboardContainer
        , allTasksContainer
        , dateTasksContainer

    } = useStyles();
    const today = moment().format('MMMM DD, YYYY');
    const tomorrow = moment().add(1, 'day').format('MMMM DD, YYYY');

    return (
        <Grid
            container
            className={dashboardContainer}
        >
            <Grid item
                xs={12}
                md={3}
                order={2}
                className={allTasksContainer}>
                < List
                    listTitle='Tasks'
                    showTabs
                    date={false}
                    exTasks={allTasks}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={9}
                className={dateTasksContainer}>
                <Search />
                <Grid container>
                    <Grid item
                        xs={12}
                        md={9}>
                        < List
                            listTitle='Today'
                            showTabs={false}
                            date={today}
                            exTasks={todayTasks}

                        />
                    </Grid>
                    <Grid item
                        xs={12}
                        md={3}>
                        < List
                            listTitle='Tomorrow'
                            showTabs={false}
                            date={tomorrow}
                            exTasks={''}
                        />
                    </Grid>
                </Grid>
            </Grid>

        </Grid >);

};

export default Dashboard;