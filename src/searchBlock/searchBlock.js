import React, { useState } from "react";
import useFetch from "../customHooks/useFetch";
import SearchDataDetails from "./searchedBlog";


const SearchBlock = () => {

    const {data, isPending, error} = useFetch('http://localhost:3000/blogs/')

    let [inputValue, setInputValue] = useState('');

    let [propData, setPropData] = useState()

    function handleSearch() {
        for (let i = 0; i < data.length; i++) {
            if(data[i].title === inputValue) {
                setPropData(data[i])
                // console.log(data[i])
            }
        }
    }

    return (
        <>
            <div className="searchBlock">
                <h2>Search Blog!</h2>
                <div className="buttons">
                    <input type="text" onChange={(e) => {setInputValue(e.target.value)}}/>
                    <button onClick={() => {handleSearch()}}>Search!</button>
                </div>
                {propData && <SearchDataDetails blog={propData}/>}
            </div>
        </>
    )
}

export default SearchBlock;