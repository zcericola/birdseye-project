/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles } from '@material-ui/styles';
import {
    primaryColor,
    purpleGray,
    centerVandH,
    secondaryColor
} from '../../globalStyles';

const useStyles = makeStyles( {
    ListContainer: {
        backgroundColor: '#fff'
        , [ '@media(maxWidth: 780px)' ]: {
            order: 2
        }
    }
    , title: {
        margin: '10px 30px'
        , color: primaryColor
    }
    , taskTab: {
        width: '20%'
    }
    , taskCreator: {
        ...centerVandH
        , height: 100
        , color: secondaryColor
        , backgroundColor: purpleGray
        , textTransform: 'uppercase'
        , cursor: 'pointer'
        , margin: 0
    }

} );

export default useStyles;
