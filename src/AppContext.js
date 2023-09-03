import { createContext } from "react";

const AppContext = createContext({
    isModalOn: false,
    setModalOn: () => {},
});

export default AppContext;