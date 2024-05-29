import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "../types/routes";

export function Menu(){

    return(
        <div>
            <h3 className="underline decoration-sky-500">Admin</h3>
            <nav>
                <ul className="flex">
                    <li className="mr-4 mt-3 mb-3">
                        <Link to={ROUTE.PANEL}>Panel</Link>
                    </li>
                    <li className="mt-3 mb-3">
                        <Link to={ROUTE.DASHBOARD}>Dashboard</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}