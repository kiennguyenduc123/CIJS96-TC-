// khởi tạo kho 
import { createContext } from "react";
const initStore = {
    //cos 1 gias tri theme 
    theme: {
        // có 2 thuộc tính
        value: true,
        set: (newState) => {}, 
    },
    lang: {
        value: 'VI',
        set: (newLang) => {},
    },
};
const Store = createContext(initStore);

export default Store;