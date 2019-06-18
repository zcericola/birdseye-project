/* eslint-disable import/no-extraneous-dependencies */
import { makeStyles } from '@material-ui/styles';
import {
    primaryColor
    , purpleGray
    , centerVandH
    , secondaryColor
    , textGray
    , accentGray
} from '../../globalStyles';
import { relative } from 'path';

const useStyles = makeStyles( {
    ListContainer: {
        backgroundColor: '#fff'
    }
    , title: {
        margin: '10px 30px'
        , color: primaryColor
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
    , dateSubtitle: {
        color: textGray
        , fontSize: 12
    }
    , dashedLines: {
        width: '40%'
        , borderBottom: '1px dashed black'
        , lineHeight: 1
        , display: 'inline-block'
        , color: textGray
        , margin: 'inherit auto'
    }
    , completedTitle: {
        color: textGray
        , margin: '0 20px'
        , lineHeight: '10px'
        , position: 'relative'
        , bottom: 15
        , fontStyle: 'italic'

    }
    , completedSection: {
        margin: '50px auto'
        , width: '80%'
    }

} );

export default useStyles;
