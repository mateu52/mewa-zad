import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "../types/routes";

export function Menu(){

    return(
        <div>
            <h3 className="underline decoration-sky-500 pl-2">Admin</h3>
            <nav className="">
                <ul className="flex pl-3 bg-gray-100">
                    <li className="mr-4 mt-2 mb-1">
                        <Link to={ROUTE.PANEL}>Panel</Link>
                    </li>
                    <li className="mt-2 mb-1">
                        <Link to={ROUTE.DASHBOARD}>Dashboard</Link>
                    </li>
                    <li className="ml-4 mt-2 mb-1">
                        <Link to={'/Ems'}>Ems</Link>
                    </li>
                    <li className="ml-4 mt-2 mb-1">
                        <Link to={'/Ems-form'}>Ems form</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}