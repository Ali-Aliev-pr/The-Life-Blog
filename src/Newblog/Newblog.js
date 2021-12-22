import React from "react";

function Newblog({}) {
    return (
        <>
            <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Jackson">Jackson</option>
                    <option value="Mario">Mario</option>
                </select>
                <button>Add Blog!</button>
                {/* {!isPending && <button>Add blog!</button>}
                {isPending && <button disabled>Adding blog...</button>} */}
            </form>
        </div>
        </>
    )
}

export default Newblog;