import * as Actions from "../constants";
export const generalActions = (props) => {
    return {
        getInfo: (data) => {
            props.dispatch({ type: Actions.GET_USER_INFO, data });
        },
        getBirthdays: (data) => {
            props.dispatch({ type: Actions.GET_BIRTHDAYS, data });
        },
        storeTheme:(data) =>{
            props.dispatch({type:Actions.STORE_THEME,data})
        }
    }
}