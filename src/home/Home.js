import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import Bloglist from "../bloglist/Bloglist";
import useFetch from "../customHooks/useFetch";

const Home = () => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:3000/blogs')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(blog => {
    //             // console.log(blog)
    //             setIsPending(false)
    //             setData(blog)
    //         })
    //     }, 1000)
    // })

    // function handlerDel(id) {
    //     const updated =  data.filter(e => e.id != id)
    //     setData(updated)
    // }

    const {data, isPending, error} = useFetch('http://localhost:3000/blogs/')

    return ( 
        <div className="home">
            {data && <Bloglist blogs={data}/>}
            {isPending && <div>Loading data....</div>}
        </div>
     );
}
 
export default Home;