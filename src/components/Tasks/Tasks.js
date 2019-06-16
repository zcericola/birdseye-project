import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './tasksStyles';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';


const Tasks = (props) => {
    const {
        tasksContainer
        , title

    } = useStyles();
    return (
        <Grid
            item
            className={tasksContainer}
            md={4}
        >
            <div className={title}>
                <Typography variant={'h5'}>Tasks</Typography>
            </div>



        </Grid>


    );

};

export default Tasks;