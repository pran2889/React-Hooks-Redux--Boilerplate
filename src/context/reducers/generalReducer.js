import * as Actions from "../constants";
export const generalStates = {
    data: []
}

export const generalReducer = (state, action) => {
    switch (action.type) {
        case Actions.GET_USER_INFO:
            return {
                ...state,
                data: action.data
            };
        default:
            throw new Error("Unexpected action");
    }
};