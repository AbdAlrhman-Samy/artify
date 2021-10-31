//MUI imports
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

//Components imports
import Topbar from "../Components/Home/Topbar"
import Header from "../Components/Home/Header"
import Search from "../Components/Home/Search";

//Other imports
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

    const [pageNumber, setPageNumber] = useState(Math.floor(Math.random() * 1000))
    const [data, setData] = useState(null)

    async function fetchData() {
        const res = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=1&fields=id,title,artist_title,date_display,image_id,medium_display`)
        return res.data
    }

    useEffect(() => {
        const source = axios.CancelToken.source();

        if(!localStorage.getItem("HomeArt")){
            console.log('fetching data');

            fetchData().then(res=> {
                console.log('fetchData ran')
                setData(res)
                localStorage.setItem("HomeArt", JSON.stringify(res))
            })

        } else {
            setData(JSON.parse(localStorage.getItem("HomeArt")))
            console.log('cached data');
        }

        return () => source.cancel()

    }, [])

    return (
        <Container>
            <Topbar/>
            {data && <Header artworkData={data} setData={setData} setPageNumber={setPageNumber} fetchData={fetchData}/>}
            <Divider></Divider>
            <Search/>
        </Container>
    )
}

export default Home
