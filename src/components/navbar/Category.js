import React from 'react'

function Category() {
    const category = ['Electronics', 'Clothings', 'Food', 'Cosmetics', 'Others']

    const categoryWiseSearch = (category) => {
        console.log(category)
    }

    return (
        <>
            <div className="flex flex-row justify-center flex-wrap bg-yellow-300">
                {
                    category.map((c, index) => (
                        <button key={index} className="text-base font-extrabold m-0.5 mx-4"
                        onClick={e => categoryWiseSearch(c)}>{c}</button>
                    ))
                }
            </div>
        </>
    )
}

export default Category
