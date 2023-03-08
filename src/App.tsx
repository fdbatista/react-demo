import * as React from 'react';
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import routes from './routes'
const router = createBrowserRouter(routes);

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
};

export default App;
