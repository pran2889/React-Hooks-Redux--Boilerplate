import React, { useEffect, useContext, useState } from 'react'
import { Container, CssBaseline, makeStyles, CircularProgress } from '@material-ui/core'
import { withRouter } from "react-router-dom";
import { StoreContext } from "../../context/store/storeContext";
import useGetData from "../../hooks/getHook";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import SharedTest from '../shared/sharedTest';
import { API_URL, GET_DATA_TODO } from '../../Constants/apis';

const getMuiTheme = () => createMuiTheme({
    overrides: {
        MuiTableCell: {
            root: {
                padding: "6px",
            }
        },
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '100%',
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
    const { state, actions } = useContext(StoreContext);
    const { getData } = useGetData({
        response: [],
        error: "",
        isLoading: true,
        URL: API_URL + GET_DATA_TODO
    });
    const [data, setData] = useState([]);
    const columnsData = [
        { label: "Id", name: "id", },
        { label: "Title", name: "title", },
        { label: "User", name: "userId", },
        { label: "Status", name: "status", options: { display: false } },
    ];


    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "vertical",
        download: false,
        print: false,
        selectableRows: false,
        rowsPerPage: 5,
        textLabels: {
            body: {
                noMatch: getData.isLoading ?
                    <CircularProgress color="secondary" size="40px" /> :
                    'Sorry, there is no matching data to display',
            },
        },
        onRowClick: (data) => {
            actions.generalActions.getInfo({ id: data[0], title: data[1], userId: data[2], status: data[3] });
        },
    };
    useEffect(() => {
        actions.generalActions.getInfo([]);
        if (getData && getData.response) {
            let response = [];
            for (const key in getData.response) {
                response.push({
                    id: getData.response[key].id,
                    title: getData.response[key].title,
                    userId: getData.response[key].userId,
                    status: getData.response[key].completed,
                })
            }
            setData(response);
        }
    }, [getData])

    return (
        <div className="mainContent">
            <CssBaseline />
            <div className={classes.appBarSpacer} />
            <Container className={classes.container}>
                <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable
                        title={"Dashboard"}
                        data={data}
                        columns={columnsData}
                        options={options}
                    />
                </MuiThemeProvider>
            </Container>
            <SharedTest></SharedTest>
        </div>
    )
}

export default withRouter(Dashboard);