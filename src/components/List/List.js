import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './listStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContent from '../TabContent/TabContent';
import ListItem from '../ListItem/ListItem';


const List = ( { listTitle } ) => {
    const {
        ListContainer
        , title
        , taskTab
        , taskCreator

    } = useStyles();
    const [ selectedTab, setSelectedTab ] = useState( 0 );
    const [ list, addNewTask ] = useState( [
        {
            name: 'V1Interview Scripts'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Review Scripts'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Customer Map'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'V1 DOB to web'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Order Business Cards'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Schedule Dribble Post'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Send Invites'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'UX and Wireframing'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
        , {
            name: 'Prototype Creation'
            , scheduledAt: {
                day: 'Today'
                , time: '8:00 AM'
            }
        }
    ] );

    const handleTabSelection = ( e, selectedTab ) => {
        setSelectedTab( selectedTab );
    };

    const createTask = ( name ) => {
        //logic to add a new task would go here
        // addNewTask( { name } );
    };

    return (
        <Grid
            item
            className={ListContainer}
            xs={12}
            md={4}
        >
            <div className={title}>
                <Typography variant={'h5'}>{listTitle}</Typography>
            </div>
            <Tabs
                value={selectedTab}
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

                    <Button
                        component='div'
                        className={taskCreator}
                        onClick={createTask}
                    >
                        +Create Task
                    </Button>
                    {list && list.map( ( task, idx ) => {
                        return (
                            <ListItem
                                key={idx}
                                taskName={task.name}
                                scheduledAt={task.scheduledAt} />
                        );
                    } )}
                </TabContent>
            }
            {
                selectedTab === 1 && <TabContent>
                    Projects would go here...
                </TabContent>
            }



        </Grid>


    );

};

export default List;