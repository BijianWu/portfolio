import { createContext } from "react";

const AppContext = createContext({
    isModalOn: false,
    setModalOn: () => {isModalOn = !isModalOn},
});

export default AppContext;