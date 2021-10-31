//Router imports
import { Link } from "react-router-dom"

//MUI imports
import Container from "@mui/material/Container"
import Box from "@mui/system/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

function Error() {
    return (
        <Container
        sx={{textAlign:"center", color:"text.light", height:"100vh", display:"flex", alignItems:"center", justifyContent:"space-evenly", flexDirection:"column"}}>
            <Box p={5} sx={{border:"3px solid", borderColor:"error.main"}}>
                <Typography variant="caption">¯\_(ツ)_/¯</Typography>
                <Typography variant="h1">404</Typography>
                <Typography variant="body1">Nothing here, buddy.</Typography>
            </Box>
            <Link style={{textDecoration:"none"}} to="/"><Button variant="contained" color="error" size="large">Go back home</Button></Link>
        </Container>
    )
}

export default Error