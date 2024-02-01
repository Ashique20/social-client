import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

const Media =()=>{
    const [medias,setMedia] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/media')
        .then(res=>res.json())
        .then(data=>setMedia(data))
    },[])
    return(
        <div>
            {medias.map(media=><MediaCard media={media} key={medias._id}></MediaCard>)}
        </div>
    )
}

export default Media;