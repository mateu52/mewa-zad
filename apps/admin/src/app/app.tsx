import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {Panel} from './pages/Panel';
import {Dashboard} from './pages/Dashboard';
import { Layout } from './components/Layout';
import { ROUTE } from './types/routes'


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

