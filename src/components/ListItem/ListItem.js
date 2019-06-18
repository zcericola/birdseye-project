/* eslint react/prop-types: 0 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import useStyles from './taskItemStyles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';



const ListItem = ( { taskName, scheduledAt, completed } ) => {
    const {
        itemContainer
        , accentText
        , itemSubTitle
        , timeContainer
        , description
    } = useStyles();
    const { day, time } = scheduledAt;
    return (
        <Grid
            container
            alignItems='center'
            justify='space-between'
            className={itemContainer}
        >
            <Grid item>
                <Checkbox />
            </Grid>
            <Grid item className={description}>
                <Typography
                    variant='h6'
                    className={accentText}>
                    Birdseye - Application
                </Typography>
                <Typography
                    variant='h6'
                    className={itemSubTitle}
                >
                    {taskName}
                </Typography>

            </Grid>
            <Grid item
                className={timeContainer}>
                <Typography
                    variant='h6'
                    className={accentText}
                >
                    {day}
                </Typography>
                <Typography
                    variant='h6'
                    className={accentText}
                >
                    {time}
                </Typography>

            </Grid>
        </Grid>


    );

};

export default ListItem;