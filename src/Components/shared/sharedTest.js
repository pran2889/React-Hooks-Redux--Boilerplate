import { useContext } from "react";
import { StoreContext } from "../../context/store/storeContext";

const SharedTest = () => {
    const { state } = useContext(StoreContext);

    return (<>
        <h1>{state.generalStates.data.title}</h1>
    </>
    );
};

export default SharedTest;