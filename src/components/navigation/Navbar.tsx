import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, } from "react-redux";

export default function AppNavbar(props: any) {
    const dispatch = useDispatch();
    const handleSidebarToggle = () => {
        dispatch({type: 'sidebar/toggle'});
    }
    return (
        <AppBar position="sticky" sx={{backgroundColor: '#212529'}}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleSidebarToggle}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Lyrically
                </Typography>
                <Typography variant="h6" color="inherit" component="div" sx={{fontWeight: 'bold', px: 1}}>
                    ADMIN
                </Typography>
            </Toolbar>
        </AppBar>
    );
}