import React, {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

function Search() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(input)
        e.target.reset()
    }

    return (
        <>
            <form className="flex flex-row justify-between border-2 border-gray-300 relative rounded-md w-11/12 sm:w-10/12 md:8/12 lg:w-7/12 xl:w-1/2"
            onSubmit={e => handleSearch(e)}>
                <input className=" bg-white h-10 px-5 pr-14 w-full rounded-lg text-md focus:outline-none"
                type="search" name="search" placeholder="Search" required
                onChange={e => handleChange(e)}/>
                <button type="submit" className="absolute bg-yellow-200 right-0 rounded-r-sm p-3">
                    <FaSearch />
                </button>
            </form>  
        </>
    )
}

export default Search
