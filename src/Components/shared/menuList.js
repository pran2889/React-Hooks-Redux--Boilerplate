import React,{Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { NavLink } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'   
import Tooltip from '@material-ui/core/Tooltip';

import { useTranslation } from 'react-i18next';
import i18nFile from '../../i18next';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: "theme.palette.background.paper",
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    active: {
        backgroundColor: "theme.palette.action.selected",
        
      },
}));
const AppMenu = () => {
    const classes = useStyles();
    const [openModules, setOpenModules] = React.useState(false)
    const {t } = useTranslation("menulist");

    function handleClickModules() {
        setOpenModules(!openModules)
    }
    return (
        <Fragment>        
            <NavLink style={{ color: "inherit", textDecoration: "none" }}  to="/dashboard" >             
                <Tooltip title="Dashboard" >
                    <ListItem button  >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={t("dashboard-link-text")} />
                    </ListItem>
                </Tooltip>
            </NavLink>

            <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/layout">             
                <Tooltip title="Layout">
                    <ListItem button>
                        <ListItemIcon>
                            <ShoppingCartIcon    />
                        </ListItemIcon>
                        <ListItemText primary={t("layout-link-text")} />
                    </ListItem>
                </Tooltip>
            </NavLink>

            <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/layout2">             
                <Tooltip title="Layout2">
                    <ListItem button >
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText primary={t("layout2-link-text")} />
                    </ListItem>
                </Tooltip>
            </NavLink>

            <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/layout3">                   
                <Tooltip title="Layout3">
                    <ListItem button>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={t("layout3-link-text")} />
                    </ListItem>
                </Tooltip>
            </NavLink>

            <Tooltip title="Modules">
                <ListItem button onClick={handleClickModules} >
                    <ListItemIcon >
                        <DehazeIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("modules-link-text")} />
                    {openModules ? <IconExpandLess /> : <IconExpandMore />}
                </ListItem>
            </Tooltip>
            <Collapse in={openModules} timeout="auto" unmountOnExit>                
                <List component="div" disablePadding>
                    <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/menu1" >
                        <Tooltip title="Menu1">
                        <ListItem button className={classes.nested} >
                            <ListItemIcon>
                                <LayersIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("menu1-link-text")} />
                        </ListItem>
                        </Tooltip>
                    </NavLink>
                    <NavLink style={{ color: "inherit", textDecoration: "none" }} to="/menu2" >
                        <Tooltip title="Menu2">
                        <ListItem button className={classes.nested} >
                            <ListItemIcon>
                                <LayersIcon />
                            </ListItemIcon>
                            <ListItemText primary={t("menu2-link-text")} />
                        </ListItem>
                        </Tooltip>
                    </NavLink>
                </List>
            </Collapse> 
        </Fragment>
    )
}



export default AppMenu;
