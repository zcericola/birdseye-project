import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import useStyles from './searchStyles';
import logo from '../../assets/birdseye_logo.png';

const Search = ( props ) => {
    const {
        searchContainer
        , formField
        , birdsEyeLogo
        , icon
        , settings
        , upgradeMsg
        , upgradeLink
        , redDot

    } = useStyles();
    return (
        <Grid
            item
            className={searchContainer}
            xs={12}
            md={8}
        >
            <img src={logo}
                className={birdsEyeLogo}
                alt='Birdseye logo'
            />
            <TextField
                variant='outlined'
                className={formField}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className={icon} />
                        </InputAdornment>
                    )
                }} />
            <Grid item className={settings}>
                <span
                    className={upgradeMsg}
                >
                    10 days left
                </span >
                <span
                    className={upgradeLink}
                >
                    Upgrade
                </span>
                <SettingsIcon className={icon} />
                <div className={redDot}></div>


            </Grid>
        </Grid>



    );

};

export default Search;