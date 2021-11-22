import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"
export default function Product({ item: { Id, Title, Price, image, Category, Quantity } }) {
    // const Product=[
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
    //     { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},

    // ];

    return (
        <div >
            <div className=" mx-5">
                <img src={image} alt="product w=60% h-60%" ></img>
            </div>
            <div className="  mx-3  ">
                <h6 className="text-base  font-extrabold">{Title} </h6>
                <h6 className="text-base  font-semibold">{Category} </h6>
            </div>
            <div className="  mx-3 justify-between flex flex-row ">

                <h6 className="text-base font-extrabold"> Price:{Price}</h6>
                <h6 className="text-base font-extrabold">Quantity:{Quantity} </h6>
            </div>

            <div className=" mx-3  justify-between flex flex-row ">
                <button className="bg-yellow-100 transition transform hover:scale-110 px-2  my-2 mx-1 rounded-lg"> <AiFillDelete size={20} /></button>
                <button className="bg-yellow-100 transition transform hover:scale-110  px-2  mx-1 my-2 rounded-lg"> <AiFillEdit size={20} /></button>
            </div>

            <div className="mx-3  justify-between flex flex-row ">
                <button className="bg-purple-400 transition transform hover:scale-110 px-2 my-2 mx-1 rounded-full" ><i className="fa fa-minus font-bold text-xl"></i></button>
                <button className="bg-purple-400 transition transform hover:scale-110 px-3 py-1 rounded-full" ><i className="fa fa-plus font-bold text-xl"></i></button>

                {/* <h3 className="bg-purple-400 px-3 py-0 rounded-lg font-bold text-2xl" >{cartProducts[id].count}</h3> */}
            </div>
        </div>
    )








}











