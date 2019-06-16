import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {

        primary: {
            main: '#051586',
        }
        , secondary: {
            main: '#4935B8',
        }

    }
    , typography: {
        useNextVariants: true
        , fontFamily: [
            'Roboto'
            , 'sans-serif'
        ].join(',')
        , fontColor: '#444'

    }
    , overrides: {
        MuiOutlinedInput: {
            input: {
                fontSize: 14

            }

        }

        , MuiButton: {
            root: {
                borderRadius: 0
                , margin: '10px'
            }
            , outlined: {

                "&:hover": {
                    backgroundColor: 'transparent'
                }
            },
        }


        , MuiFormLabel: {
            root: {
                fontSize: 12
                , color: '#444'
            }
        }

    }

});

const ThemeWrapper = ({ children }) => (
    <MuiThemeProvider
        theme={theme}
    >
        {children}
    </MuiThemeProvider>
);

export default ThemeWrapper;