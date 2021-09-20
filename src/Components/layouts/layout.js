import React, { useEffect, useState } from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import ErrorBoundary from "../Error/errorBoundary";
import GlobalLoader from "../shared/GlobalLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    height: "80vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export const Layout = (props) => {
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  // useEffect(() => {
  //     throw new Error("Layout was not accessible")
  // }, [])
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="mainContent">
      <CssBaseline />

      <main className={classes.content}>
        {loading ? <GlobalLoader open={loading} /> : ""}
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}></Container>
      </main>
    </div>
  );
};

export default Layout;
