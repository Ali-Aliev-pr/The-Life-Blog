import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Newblog({}) {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();

    const addBlog = () => {
        const blog = {
            title: title,
            body: body,
            author: author
        }

        fetch('http://localhost:3000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New Blog added!');
            // setIsPending(false);
            // history.go(-1)
            history.push('/')
        })

    }


    return (
        <>
            <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={addBlog}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input 
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <button>Add Blog!</button>
                {/* {!isPending && <button>Add blog!</button>}
                {isPending && <button disabled>Adding blog...</button>} */}
            </form>
        </div>
        </>
    )
}

export default Newblog;