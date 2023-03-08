import Login from "../login";
import Example from "../example";

const routes = [
    {
        path: 'login',
        element: <Login/>,
    },
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/example',
        element: <Example/>,
    },
]

export default routes
