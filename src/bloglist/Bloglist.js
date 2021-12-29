import React from "react";
import { Link } from "react-router-dom";

const Bloglist = ({blogs}) => {
    return ( 
        <div className="bloglist">
            {blogs.map(e => {
                return (
                    <div className="blogs" key={e.id}>
                        <h2>{e.title}</h2>
                        <Link to={`/blogs/${e.id}`}>Read more!</Link>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Bloglist;