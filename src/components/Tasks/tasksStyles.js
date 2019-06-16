/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles } from '@material-ui/styles';
import {
    primaryColor,
    purpleGray
} from '../../globalStyles';

const useStyles = makeStyles( {
    tasksContainer: {
        border: '2px solid orange'
        , height: 'auto'

    }
    , title: {
        margin: '10px 30px'
        , color: primaryColor
    }
    , taskTab: {
        width: '20%'
    }
    , taskCreator: {
        height: 200
        , backgroundColor: purpleGray

    }

} );

export default useStyles;
