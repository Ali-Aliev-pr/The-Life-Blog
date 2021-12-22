import React from "react";

const Bloglist = ({blogs, del}) => {
    return ( 
        <div className="bloglist">
            {blogs.map(e => {
                return (
                    <div className="blogs" key={e.id}>
                        <h2>{e.title}</h2>
                        <p>{e.body}</p>
                        <button onClick={() => del(e.id)}>Delete Blog</button>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Bloglist;