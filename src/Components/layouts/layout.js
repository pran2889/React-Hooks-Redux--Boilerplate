import React, {useEffect} from 'react'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'
import ErrorBoundary from '../Error/errorBoundary';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      content: {
        flexGrow: 1,
        height: '80vh',
        overflow: 'auto',
      },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    }));

export const Layout = (props) => {
    const classes = useStyles();
    // useEffect(() => {
    //     throw new Error("Layout was not accessible")
    // }, [])
    return(
        <div className="mainContent">
        <CssBaseline/>
          <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                   
                </Container>
            </main>
        </div>
    )
}

export default Layout;