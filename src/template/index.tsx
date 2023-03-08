import {AppBar, Button, Toolbar, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" component="div">
                    My Navbar
                </Typography>

                <NavLink to={'/login'}>
                    <Button className={'nav-link'}>
                        Home
                    </Button>
                </NavLink>

                <NavLink to={'/example'}>
                    <Button className={'nav-link'}>
                        Example
                    </Button>
                </NavLink>

                <NavLink to={'/TEST'}>
                    <Button className={'nav-link'}>
                        TEST
                    </Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
}
