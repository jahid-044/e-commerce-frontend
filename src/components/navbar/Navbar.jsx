import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import {RiLogoutCircleLine} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import Category from './Category'
import {FiPlusSquare} from 'react-icons/fi'
import AddProduct from '../products/AddProduct'

function Navbar() {
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)
    const [auth, setAuth] = useState(true)
    //const role = 'SHOP_OWNER'

    const handleLogout = () => {
        localStorage.clear()
        history.push('/')
        setAuth(false)
    }

    const handleSignIn = () => {
        setAuth(true)
        history.push('/')
    }

    const handleGoToHome = () => {
        history.push('/')
    }

    return (
        <>
            <nav className="flex flex-row sticky top-0 z-50 justify-between bg-gray-800">
                <div className="flex flex-row">
                    <div className="flex items-center text-xl text-yellow-50 mx-4">e-Com App</div>
                    {auth && 
                        <div className="flex items-center h-14 cursor-pointer"
                        onClick={handleGoToHome}>
                            <div className="bg-green-300 px-2 mx-4 py-2 rounded-md hover:bg-green-400">
                                <AiFillHome size={28}/>
                            </div>
                        </div>
                    }
                </div>

                {auth && <div className="flex flex-row items-center">
                        <div className="mx-2 cursor-pointer" onClick={() => setShowModal(true)}>
                            <FiPlusSquare size={50} color={"yellow"}/>
                        </div>
                        <div className="flex items-center h-14 cursor-pointer"
                        onClick={handleLogout}>
                            <div className="bg-red-400 px-2 mx-4 py-2 rounded-lg hover:bg-red-500">
                                <RiLogoutCircleLine size={28}/>
                            </div>
                        </div>
                    </div>
                }
                {!auth &&
                    <div className="flex items-center h-14 cursor-pointer"
                    onClick={handleSignIn}>
                        <button className="bg-yellow-400 px-5 mx-4 py-2 font-bold rounded-md hover:bg-yellow-500">
                            Sign In
                        </button>
                    </div>
                }
            </nav>
            <Category />

            {showModal && <AddProduct onClick={()=> setShowModal(true)} showModal={showModal} setShowModal={setShowModal}/>}
        </>
    )
}

export default Navbar
