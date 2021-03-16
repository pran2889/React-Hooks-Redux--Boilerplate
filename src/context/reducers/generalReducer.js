import * as Actions from "../constants";
export const generalStates = {
    data: [],
    birthdays: null
}

export const generalReducer = (state, action) => {
    switch (action.type) {
        case Actions.GET_USER_INFO:
            return {
                ...state,
                data: action.data
            };
        case Actions.GET_BIRTHDAYS:
            return {
                ...state,
                data: action.birthdays
            };
        default:
            throw new Error("Unexpected action");
    }
};