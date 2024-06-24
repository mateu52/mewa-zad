import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Panel} from './pages/Panel';
import {Dashboard} from './pages/Dashboard';
import { Layout } from './components/Layout';
import { ROUTE } from './types/routes'
import { Ems } from './pages/Ems';
import { EmsForm } from './pages/Ems-form';


export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [    
                {
                    path: ROUTE.PANEL,
                    element: <Panel />
                },
                {
                    path: ROUTE.DASHBOARD,
                    element: <Dashboard />
                },
                {
                    path: '/Ems',
                    element: <Ems />
                },
                {
                    path: '/Ems-form',
                    element: <EmsForm />
                }
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </div>
    );
}
export function Fallback() {
    return <p>Performing initial data load</p>;
}

