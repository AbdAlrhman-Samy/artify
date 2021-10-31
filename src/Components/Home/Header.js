//MUI imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'

//Hooks imports
import useFetch from "../../Hooks/useFetch"
import { useState } from "react"


//Static imports
import { BsShuffle } from "react-icons/bs"

function Header() {

    const [pageNumber, setPageNumber] = useState(Math.floor(Math.random() * 1000))

    const {loading, error, setFetch} = useFetch(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=1&fields=id,title,artist_title,date_display,image_id,medium_display`, `HomeArt`)

    const cachedData = JSON.parse(localStorage.getItem("HomeArt"))

    if(!cachedData){
        localStorage.setItem("HomeArt", JSON.stringify({
            "pagination": {
                "total": 115505,
                "limit": 1,
                "offset": 884,
                "total_pages": 115505,
                "current_page": 885,
                "prev_url": "https://api.artic.edu/api/v1/artworks?page=884&limit=1&fields=id%2Ctitle%2Cartist_title%2Cdate_display%2Cimage_id%2Cmedium_display",
                "next_url": "https://api.artic.edu/api/v1/artworks?page=886&limit=1&fields=id%2Ctitle%2Cartist_title%2Cdate_display%2Cimage_id%2Cmedium_display"
            },
            "data": [
                {
                    "id": 104227,
                    "title": "Les Chats",
                    "date_display": "1870",
                    "medium_display": "Book with five etchings, two with aquatint and three with plate tone, one color lithograph, and line block prints, two with hand-coloring, with letterpress in black on ivory wove paper, with cardboard and paper cover and leather spine with gilt lettering",
                    "artist_title": "Édouard Manet",
                    "image_id": "3ddf925f-1516-6fbb-878c-290e6db0b041"
                }
            ],
            "info": {
                "license_text": "The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
                "license_links": [
                    "https://creativecommons.org/publicdomain/zero/1.0/",
                    "https://www.artic.edu/terms"
                ],
                "version": "1.1"
            },
            "config": {
                "iiif_url": "https://www.artic.edu/iiif/2",
                "website_url": "http://www.artic.edu"
            }
        }))
    }

    if(error) {
        console.log(error);
        return null
    }

    function getNewArtwork(){
        setPageNumber(Math.floor(Math.random() * 1000))
        setFetch(true)
    }


    return (
        <Container>
            <Grid container mt={2} justifyContent="space-evenly" alignItems="center">
                <Grid item md={5} sx={{textAlign:"center"}}>

                    <Box my={3} mx="auto">
                        <Typography variant="h3" color="primary" sx={{fontWeight:"bold", }}>{cachedData.data[0].title}</Typography>
                        <Divider>
                            <Typography variant="overline" sx={{fontWeight:"bold", color:"#13212A"}}>
                                By: {cachedData.data[0].artist_title}
                            </Typography>
                        </Divider>

                        <Typography variant="subtitle1" sx={{fontWeight:"light", color:"#13212A"}}>
                            Type: <b>{cachedData.data[0].medium_display}</b>  <br />
                            Date: <b>{cachedData.data[0].date_display}</b> 
                        </Typography>
                    </Box>

                    <Button color="secondary" variant="contained" endIcon={loading? null : <BsShuffle/>} disableElevation onClick={getNewArtwork}>{loading? "Loading" : "Random Artwork"}</Button>

                </Grid>

                <Grid item md={5} mt={2} p={3} sx={{bgcolor:"secondary.light", borderRadius:"69% 31% 72% 28% / 42% 32% 68% 58%", width:"100%"}}>
                    {cachedData.data[0].image_id?
                        <Box component="img" 
                        src={`${cachedData.config.iiif_url}/${cachedData.data[0].image_id}/full/843,/0/default.jpg`} maxWidth="100%" maxHeight="650px"
                        sx={{boxShadow:10, borderRadius:3, mx:"auto", display:"block"}}/>
                    :
                        <Typography variant="h4" color="primary" >No Images Available</Typography>

                    }
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header
