import { makeStyles } from '@material-ui/styles';
import { textGray, accentGray, purpleGray } from '../../globalStyles';

const useStyles = makeStyles( {
    itemContainer: {
        padding: 10
        , backgroundColor: '#fff'
        , borderBottom: `3px solid ${ accentGray }`

    }
    , description: {
        width: '80%'
    }
    , accentText: {
        color: textGray
        , fontSize: 10

    }
    , itemSubTitle: {
        fontSize: 14
    }
    , scheduledTime: {
        fontSize: 10
    }
    , timeContainer: {
        display: 'flex'
        , flexDirection: 'column'
    }

} );

export default useStyles;