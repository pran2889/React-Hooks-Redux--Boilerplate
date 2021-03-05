import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../shared/navbar";
import Sidebar from "../shared/sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withRouter } from "react-router-dom";
import MenuRoutes from "../../Router/dashboard.router";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    }
  }));
const Home = () => {
    const classes = useStyles(0);
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={classes.root}>
          <CssBaseline />
          <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
          <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
          <MenuRoutes/>
        </div>
    );
};

export default withRouter(Home);