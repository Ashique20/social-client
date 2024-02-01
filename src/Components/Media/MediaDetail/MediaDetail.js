import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MediaDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/media/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [id])
    console.log(detail)


    return (
        <div className="min-h-screen ">
            <div className="card w-96 bg-base-100 shadow-xl ml-40 mt-40">
                <figure><img src={detail?.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{detail?.name}</h2>
                    <p>{detail?.caption}</p>
                  
                </div>
            </div>        </div>
    )
}


export default MediaDetail;