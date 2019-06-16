import { makeStyles } from '@material-ui/styles';
import loginBg from '../../assets/login_bg.png';

const useStyles = makeStyles({
    loginContainer: {
        height: '100%'
    }
    , formContainer: {
        height: '100vh'


    }
    , header: {

        height: '30vh'
        , width: '50%'
        , display: 'flex'
        , padding: 0
        , margin: 0
        , flexDirection: 'column'
        , justifyContent: 'space-evenly'
    }
    , title: {
        color: '#444'

    }
    , birdsEyeLogo: {
        height: 50
        , width: 60


    }
    , passwordLink: {
        fontSize: 10
        , color: '#777'
        , textTransform: 'uppercase'

    }
    , bgContainer: {
        height: '100vh'
        , backgroundImage: `url(${loginBg})`
        , backgroundSize: '100% 100%'


    }
    , formFieldsContainer: {


    }
    , textFieldWrapper: {
        width: '50%'

    }
    , formField: {
        [`& fieldset`]: {
            borderRadius: 0

        }

    }
    , label: {
        fontSize: 12
        , position: 'relative'
        , top: 5
    }

    , loginBtn: {
        width: '50%'
        , borderRadius: 0
        , margin: 10

    }

});

export default useStyles;