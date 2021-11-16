import React, {useState} from 'react'

function AddProduct({setShowModal}) {
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        price: '',
        quantity: '',
        category: '',
        image: '',
    })

    const handleChange = e => {
        const {id, value} = e.target

        setInputs({
            ...inputs,
            [id]: value,
        })
    }

    function handleAddProduct(e) {
        e.preventDefault()
        setShowModal(false)

        console.log(inputs)

        setInputs({
            title: '',
            description: '',
            price: '',
            quantity: '',
            category: '',
            image: ''
        })
    }

    return (
        <div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative overflow-y-scroll max-w-lg">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                    <div className="flex justify-center mt-36 p-5 border-b border-solid rounded-t">
                        <h3 className="text-xl font-semibold">
                            ADD NEW PRODUCT
                        </h3>
                    </div>
                    <div className="relative p-6">
                        <form className="w-full max-w-lg" onSubmit={handleAddProduct}>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                        Title
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                    id="title" type="text" 
                                    placeholder="Product title"
                                    onChange={handleChange}
                                    value={inputs.title}/>
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
                                    placeholder="Product description"
                                    onChange={handleChange}
                                    value={inputs.description}/>
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
                                        placeholder="Price in taka" 
                                        onChange={handleChange}
                                        value={inputs.price}/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="quantity">
                                            Quantity
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                                        id="quantity" type="number" 
                                        placeholder="Product quantity" 
                                        onChange={handleChange}
                                        value={inputs.quantity}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none mb-2 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                        id="category" 
                                        onChange={handleChange}
                                        value={inputs.category}>
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
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image">
                                        Image
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" 
                                    id="image" type="file" 
                                    placeholder="Upload product image" 
                                    onChange={handleChange}
                                    value={inputs.image}/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button className="bg-emerald-500 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-3 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}>
                        Close
                    </button>
                    <button className="bg-emerald-500 bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleAddProduct}>
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
