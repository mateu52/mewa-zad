import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "../types/routes";

export function Menu(){

    return(
        <div>
            <h3>Admin</h3>
            <nav>
                <ul>
                    <li>
                        <Link to={ROUTE.PANEL}>Panel</Link>
                    </li>
                    <li>
                        <Link to={ROUTE.DASHBOARD}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}