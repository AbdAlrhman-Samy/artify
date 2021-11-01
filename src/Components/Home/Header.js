//MUI imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import {BsShuffle} from "react-icons/bs"

//React imports
import {useState} from "react"

function Header({artworkData, setData, fetchData, setPageNumber}) {

    const [loading, setLoading] = useState(false)

    function getNewArt() {
        setLoading(true)

        setPageNumber(Math.floor(Math.random() * 1000))
        fetchData().then(res=> {
            console.log('fetchData ran')
            setData(res)
            localStorage.setItem("HomeArt", JSON.stringify(res))
            setLoading(false)
        })
    }
    
    return (
        <Container sx={{minHeight:"70vh", display:"flex", alignItems:"center", mb:3}}>
            <Grid container mt={2} justifyContent="space-evenly" alignItems="center">
                <Grid item md={5} sx={{textAlign:"center"}}>

                    <Box my={3} mx="auto">
                        <Typography variant="h3" color="primary" sx={{fontWeight:"bold", }}>{artworkData.data[0].title}</Typography>
                        <Divider>
                            <Typography variant="overline" sx={{fontWeight:"bold", color:"#13212A"}}>
                                By: {artworkData.data[0].artist_title}
                            </Typography>
                        </Divider>

                        <Typography variant="subtitle1" sx={{fontWeight:"light", color:"#13212A"}}>
                            <b>Type:</b> {artworkData.data[0].medium_display}
                            <br />
                            <b>Date:</b> {artworkData.data[0].date_display}
                        </Typography>
                    </Box>

                    <Button variant="contained" color="secondary" onClick={getNewArt} disabled={loading} startIcon={<BsShuffle/>} disableElevation>{loading? "Loading" : "New Artwork"}</Button>

                </Grid>

                <Grid item md={5} mt={2} p={3} sx={{bgcolor:"secondary.light", borderRadius:"69% 31% 72% 28% / 42% 32% 68% 58%", width:"100%"}}>
                    {true?
                        <Box component="img" 
                         src={`${artworkData.config.iiif_url}/${artworkData.data[0].image_id}/full/843,/0/default.jpg`}
                         maxWidth="100%" maxHeight="650px"
                        sx={{boxShadow:10, borderRadius:3, mx:"auto", display:"block"}}/>
                    :
                        <Typography variant="h4" color="primary" sx={{mx:"auto"}}>No Images Available</Typography>

                    }
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header
