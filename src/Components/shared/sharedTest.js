import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '100%',
        marginLeft: '20px',
    },
}));

const SharedTest = () => {
    const { state } = useContext(StoreContext);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1> {state.generalStates.data.title}</h1>
        </div>
    );
};

export default SharedTest;