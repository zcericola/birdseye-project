import { makeStyles } from '@material-ui/styles';
import { primaryColor } from '../../globalStyles';

const useStyles = makeStyles({
    tasksContainer: {
        border: '2px solid orange'
        , height: 100

    }
    , title: {
        margin: '10px 30px'
        , color: primaryColor
    }

});

export default useStyles;
