import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, cache) =>{
    const [fetch, setFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null)

        const source = axios.CancelToken.source();

        if (fetch){
            console.log('fetching...');
            setLoading(true)
            axios.get(url)
            .then(res=>{
                setLoading(false)
                localStorage.setItem(cache, JSON.stringify(res.data))
                console.log('fetched!');
            })
            .catch(err => {
                setLoading(false)
                setError(err)
            })
        } else console.log('didnt fetch');

        return () => source.cancel()

    }, [url, cache, fetch])

    return { loading, error, setFetch}

}

export default useFetch