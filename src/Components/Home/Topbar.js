//MUI imports
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/system/Box';

//Static imports
import logo from "../../Assets/logo.png"
import {FaUserCircle} from 'react-icons/fa';

function Topbar() {
    return (
        <AppBar position="static" color="primary"
        sx={{px:3.5, py:1, maxWidth:"85vw", mx:"auto", borderRadius:10, display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>

            <Box component="img" src={logo} maxWidth="100px" />

            <Button color="inherit"  startIcon={<FaUserCircle/>}>Login</Button>
        </AppBar>
    )
}

export default Topbar
