import { useMutation } from '@apollo/client';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { SIGNUP } from '../../queries/queries';

function OwnerSignup() {
    const history=useHistory();
    const [signUp] = useMutation(SIGNUP);

    async function submitHandler(event) {
        event.preventDefault();
        const shopName = event.target.shopName.value;
        const ownerName = event.target.ownerName.value;
        const email = event.target.email.value;
        const contact = event.target.contact.value;
        const address = event.target.address.value;
        const tin = event.target.tin.value;
        const password = event.target.password.value;
        alert("Accoount created successfully.");
        history.push('./')
        // await signUp({
        //     variables: {
        //         shopName: shopName,
        //         ownerName: ownerName,
        //         email: email,
        //         contact: contact,
        //         address: address,
        //         tin: tin,
        //         password: password
        //     }
        // }).then(() => history.push('./'))
    }
    return (
        <div className="bg-green-50 min-h-screen flex flex-col">
            <div className="container max-w-3xl mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <form onSubmit={(event) => submitHandler(event)}>
                        <h1 className="mb-8 text-3xl text-center font-bold">Sign up as shop owner</h1>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="shopName"
                                placeholder="Shop name"
                                required />
                            <input
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="ownerName"
                                placeholder="Owner name"
                                required />

                            <input
                                type="email"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                required />
                            <input
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="contact"
                                placeholder="Contact No."
                                required />
                            <input
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="address"
                                placeholder="Address"
                                required />
                            <input
                                type="text"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="tin"
                                placeholder="TIN No."
                                required />

                            <input
                                type="password"
                                className="block border border-gray-300 w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                pattern="[A-Za-z0-9]{1,8}"
                                title="Must not exceed 8 characters. No special characters."
                                required />
                        </div>

                        <button
                            type="submit"
                            className="max-w-lg flex justify-center mx-auto text-center p-3 rounded bg-green-500 text-black hover:bg-green-700 focus:outline-none my-1"
                        >Create Account</button>
                    </form>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the
                        <a className="no-underline border-b border-grey-dark text-grey-dark ml-1" href="#">
                            Terms of Service
                        </a> and
                        <a className="no-underline border-b border-grey-dark text-grey-dark ml-1" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account?
                    <Link to='./'className="no-underline border-b border-blue text-blue ml-1" href="../login/">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default OwnerSignup;