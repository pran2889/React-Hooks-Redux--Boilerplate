import { useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";

const SharedTest = () => {
    const { state } = useContext(StoreContext);
    return (
        <h1>{JSON.stringify(state.generalStates.data)}</h1>
    );
};

export default SharedTest;