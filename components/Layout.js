import { Fragment } from "react";
import Navbar from "./Navbar";

const Layout = ({children}) => (
    <Fragment>
        <Navbar />
        <div>hola</div>
        {children}
    </Fragment>
)
export default Layout