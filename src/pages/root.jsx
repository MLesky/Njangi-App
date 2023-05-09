import NavBar from "../layouts/navBar";
import { Outlet } from "react-router-dom";

const RootPage = (Outlet) => {
    return ( 
        <>
            <NavBar />
            <Outlet />
        </>
     );
}
 
export default RootPage;