import React from 'react'

function AddProduct({setShowModal}) {
    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative max-w-lg">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-center p-5 border-b border-solid rounded-t">
                        <h3 className="text-xl font-semibold">
                            ADD NEW PRODUCT
                        </h3>
                    </div>
                    <div className="relative p-6 flex-auto">
                        <form className="w-full max-w-lg">
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="title" type="text" 
                                    placeholder="Product title"/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                                    htmlFor="description">
                                        Description
                                    </label>
                                    <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    id="description" 
                                    type="text" 
                                    placeholder="Product description"/>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-wrap -mx-3 mr-2">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                            Price
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                        id="price" type="number" 
                                        placeholder="Price in taka"/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
                                            Quantity
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                        id="quantity" type="number" 
                                        placeholder="Product quantity"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                        id="category">
                                            <option>Electronics</option>
                                            <option>Clothings</option>
                                            <option>Food</option>
                                            <option>Cosmetics</option>
                                            <option>Others</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="mx-6 mb-2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Image</label>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Select a photo</p>
                                </div>
                                <input type="file" className="opacity-0" id="image"/>
                            </label>
                        </div>
                    </div>

                    <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="bg-emerald-500 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>
                    <button className="bg-emerald-500 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}>
                        Add Product
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}

export default AddProduct
