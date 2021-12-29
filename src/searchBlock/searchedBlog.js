import React from "react";
import { Link } from "react-router-dom";

const SearchDataDetails = ({blog}) => {
    return ( 
        <>
            <div className="bloglistsearch">
                <h2>{blog.title}</h2>
                <Link to={`/blogs/${blog.id}`}>Read more!</Link>
            </div>
        </>
     );
}
 
export default SearchDataDetails;