import { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import BarberApp from '../../BarberApp';
import { Dashboard, ErrorPage, Login } from '../../pages';

export const router = createBrowserRouter([

    {
        path: '/',
        element: <BarberApp />,
        errorElement: <ErrorPage />
    },
    {
        path: '/private/',
        errorElement: <ErrorPage />,
        children: [

            {
                path: 'login',
                element: <Login />,
            },

            {
                path: 'dashboard',
                element: <Dashboard />,
            },
        ]
    }
]);

