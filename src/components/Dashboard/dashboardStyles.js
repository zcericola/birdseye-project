import { makeStyles } from '@material-ui/styles';
import { accentGray } from '../../globalStyles';

const useStyles = makeStyles( theme => ( {
    dashboardContainer: {
        backgroundColor: accentGray
        , height: '100%'

    }
    , allTasksContainer: {
        order: 1
        , [ theme.breakpoints.down( 'sm' ) ]: {
            order: 2
        }



    }
    , dateTasksContainer: {
        order: 2
        , [ theme.breakpoints.down( 'sm' ) ]: {
            order: 1
        }
    }



} ) );

export default useStyles;
