import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import useFetch from "../customHooks/useFetch";
import { useHistory } from "react-router-dom";

const Blodetails = () => {
    const {id} = useParams();

    const { data: blog, error, isPending} = useFetch('http://localhost:3000/blogs/'+id)

    let history = useHistory();

    // useEffect(() => {
    //     fetch('http://localhost:3000/blogs/'+id)
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //         console.log(data)
    //     })
    // })

    const handledelete = (e) => {
        fetch('http://localhost:3000/blogs/'+id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('Blog Deleted!')
            history.push('/')
        })
    }

    return ( 
        <>
            <div className="blogdetails">
                {isPending && <div>Loading Data...</div>}
                {blog && 
                <div className="blogdetail">
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>Written by, {blog.author}</p>
                    <button onClick={handledelete}>Delete Blog!</button>
                </div>}
            </div>
        </>
     );
}
 
export default Blodetails;