import { useState } from "react";
import Store from ".";

const StoreComponent = (props) => {
    const [theme , setTheme] = useState(true);
    const [lang, setLang] = useState('VI');
    return (
    <Store.Provider
     value={{
        theme: {
            value: theme,
            set: setTheme,
        },
        lang: {
            value: lang,
            set: setLang,
        },
    }}
    >
        {props.children}
    </Store.Provider>
    )

};

export default StoreComponent;