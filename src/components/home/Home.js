import React from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import ProductList from '../products/ProductList'

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-4">
                <Search />
            </div>
            <ProductList />
        </>
    )
}

export default Home

