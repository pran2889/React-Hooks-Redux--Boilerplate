import React from 'react'
import { Container, CssBaseline, makeStyles } from '@material-ui/core'


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

export const Dashboard = (props) => {
    const classes = useStyles();
    return(
        <div className="mainContent">
        <CssBaseline/>
          <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    Content goes here
                </Container>
            </main>
        </div>
    )
}

export default Dashboard;