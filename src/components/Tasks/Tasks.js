import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './tasksStyles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContent from '../TabContent/TabContent';


const Tasks = ( props ) => {
    const {
        tasksContainer
        , title
        , taskTab
        , taskCreator

    } = useStyles();
    const [ selectedTab, setSelectedTab ] = useState( 0 );

    const handleTabSelection = ( e, selectedTab ) => {
        setSelectedTab( selectedTab );
    };

    return (
        <Grid
            item
            className={tasksContainer}
            md={4}
        >
            <div className={title}>
                <Typography variant={'h5'}>Tasks</Typography>
            </div>
            <Tabs
                value={selectedTab}
                tabItemContainerStyle={{ width: '50px' }}
                onChange={handleTabSelection}
            >
                <Tab
                    label='All'
                    className={taskTab}

                />
                <Tab
                    className={taskTab}
                    label='Projects' />
            </Tabs>
            {
                selectedTab === 0 && <TabContent>

                    <Typography
                        component='div'
                        variant='h7'
                        className={taskCreator}
                    >
                        +Create Task
                    </Typography>


                </TabContent>
            }
            {
                selectedTab === 1 && <TabContent>
                    Projects
                </TabContent>
            }



        </Grid>


    );

};

export default Tasks;