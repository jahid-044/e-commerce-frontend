import React from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-4">
                <Search />
            </div>
        </>
    )
}

export default Home

