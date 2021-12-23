import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import useFetch from "../customHooks/useFetch";

const Blodetails = () => {
    const {id} = useParams();

    const { data: blog, error, isPending} = useFetch('http://localhost:3000/blogs/'+id)

    // useEffect(() => {
    //     fetch('http://localhost:3000/blogs/'+id)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data)
    //     })
    // })

    return ( 
        <>
            <div className="blogdetails">
                {isPending && <div>Loading Data...</div>}
            </div>
        </>
     );
}
 
export default Blodetails;