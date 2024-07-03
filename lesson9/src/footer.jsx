import { useContext } from "react";
import trans from "./Store/dic";
import Store from "./Store";
const Footer = () => {
    const store = useContext(Store);
    return <div>{ trans[store.lang.value]['A1'] }</div>
}

export default Footer;