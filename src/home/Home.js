import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import Bloglist from "../bloglist/Bloglist";

const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:3000/blogs')
            .then(res => {
                return res.json()
            })
            .then(blog => {
                // console.log(blog)
                setData(blog)
            })
        }, 1000)
    })

    // function handlerDel(id) {
    //     const updated =  data.filter(e => e.id != id)
    //     setData(updated)
    // }

    return ( 
        <div className="home">
            {data && <Bloglist blogs={data} del={handlerDel}/>}
        </div>
     );
}
 
export default Home;