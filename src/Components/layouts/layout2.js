import { useContext, useState, useCallback, useEffect } from "react";
import { StoreContext } from "../../context/store/storeContext";
import useGetData from "../../hooks/getHook";
import usePostData from "../../hooks/postHook";

import i18nFile from '../../i18next';
import { useTranslation } from 'react-i18next';
import GlobalLoader from '../shared/GlobalLoader'



const Layout2 = (props) => {
    const { state } = useContext(StoreContext);
    const {t} = useTranslation("layout2");
    const [loading,setLoading]=useState(false)

    const [body, setBody] = useState([]);
    const { postData, refreshPostData } = usePostData({
        response: [],
        error: "",
        isLoading: true,
        URL: ``,
        body: body
    });
    const { getData, refreshGetData } = useGetData({
        response: [],
        error: "",
        isLoading: true,
        URL: ``,
    });
    useEffect(() => {
        setBody(state.generalStates.data);
    }, [])
    const InvokeAPI = useCallback(() => {
        refreshPostData(`/posts`, body);
    }, [refreshPostData]);
    const InvokeGetAPI = useCallback(() => {
        refreshGetData(`/todos/1`);
    }, [refreshGetData]);

    useEffect(() => {
        setLoading(true)
        const timeout = setTimeout(() => {
            setLoading(false)
          }, 3000);
          return () => {
            clearTimeout(timeout);
          };
    }, []);
    

     //two methods to access translations
    //console.log(t("layout2Lbl"))
    //console.log("hiiii",i18nFile.t("layout2:layout2Lbl"))

    return (
        <div className="mainContent">
            {loading? <GlobalLoader open={loading}/>:"" }
            <h1>{t("layout2Lbl")}</h1>
            <button onClick={InvokeAPI}>Invoke API</button>
            <h1> {JSON.stringify(state.generalStates.data)}</h1>

            <button onClick={InvokeGetAPI}>Invoke API</button>
            <h1> {JSON.stringify(getData.response)}</h1>
        </div>
    );
};

export default Layout2;