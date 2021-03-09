import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogFetch() {

    const [items,setItems] = useState([]);


    useEffect(() => {
        axios.get('https://hn.algolia.com/api/v1/search?query=redux')
        .then(res => {
            setItems(res.data);
            console.log(res.data);
        })
    }, [])

    // const filteredItems = items.filter(item => {
        
    // })

    return (
        <>

        </>
    )
}

export default BlogFetch;
