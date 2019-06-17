import { makeStyles } from '@material-ui/styles';
import {
    defaultTextFieldStyle
    , primaryColor
    , secondaryColor
    , searchSpanText
} from '../../globalStyles';

const useStyles = makeStyles( {
    searchContainer: {
        maxHeight: 100
        , height: '90%'
        , display: 'flex'
        , alignItems: 'center'
        , background: primaryColor
        , [ '@media(maxWidth: 780px)' ]: {
            order: 1
        }

    }
    , birdsEyeLogo: {
        height: 30
        , width: 40
        , marginLeft: 20
    }
    , formField: {
        ...defaultTextFieldStyle
        , width: '50%'
        , background: secondaryColor
        , margin: '10px 0 10px 20px'
        , [ `& multilineColor` ]: {
            color: 'white'

        }

    }
    , icon: {
        fill: 'white'
    }
    , settings: {
        display: 'flex'
        , justifyContent: 'flex-end'
        , width: '40%'
    }
    , upgradeMsg: {
        ...searchSpanText
        , fontStyle: 'italic'
    }
    , upgradeLink: {
        ...searchSpanText
        , fontWeight: '700'
        , textDecoration: 'underline'
        , cursor: 'pointer'
    }
    , redDot: {
        position: 'relative'
        , borderRadius: 100
        , background: '#DC143C'
        , height: 5
        , width: 5
        , top: 16
        , right: 6
    }


} );

export default useStyles;
