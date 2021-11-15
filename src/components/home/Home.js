import React from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import ProductList from '../products/ProductList'

function Home() {
    const auth = true
    return (
        <>
            <Navbar />
            <div className="flex justify-center mt-4">
                <Search />
            </div>
            {auth && <ProductList />}
        </>
    )
}

export default Home

