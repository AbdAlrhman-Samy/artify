//MUI imports
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import {RiSearch2Fill} from "react-icons/ri"

function Search() {
    return (
        <Container maxWidth="false" sx={{my:3}}>

            <Box mx="auto" py={2} px={3.5} sx={{display:"flex", alignItems:"center", bgcolor:"text.light", borderRadius:10, border:"2px solid", borderColor:"secondary.main"}}>
                <TextField fullWidth label="Search Artworks" variant="outlined" color="primary"/>
                <IconButton variant="contained" color="primary" size="large" sx={{ml:1, p:0}}>
                    <RiSearch2Fill/>
                </IconButton>
            </Box>

        </Container>
    )
}

export default Search
