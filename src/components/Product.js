import ProductList from "./ProductList";
import {AiFillDelete} from "react-icons/ai"
import {AiFillEdit} from  "react-icons/ai"
export default  function Product(){
    const Product=[
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        
    ];

    return (
        
        <div className="flex flex-row justify-content grid gap-3 grid-cols-4">
        
         { Product.map(data=> (<div key={data.Id} className="w-screen  flex flex-row justify-content p-2 2xl:w-1/4 xl:w-1/3 md:w-1/2 py-2 px-4 lg:px-10 xl:py-4 xl:px-6 ">
        
            <div className="py-3 px-12 mx-24  rounded-2xl h-96 bg-purple-200">
            <div className="relative w-full pb-110p">
            <img  src={data.image} alt="product" ></img>
            </div>
            
            <h4 className=" w-screen bg-purple-300 px-5 rounded-lg font-semibold sm:h-36  sm:w-full">{data.Title}</h4>
            <div className="flex-grow">
                <h6 className="text-base font-extrabold"> Price:{data.Price}</h6>
            </div>
            <div className="text-right">
                <h6 className="text-base font-semibold">Quantity:{data.Quantity} </h6>
            </div>
            <div clasname=" flex  flex-row justify">
            <button className="bg-purple-100 transition transform hover:scale-110 px-3 my-2 mx-1 rounded-full"> <AiFillDelete size={20} /></button>
            <button className="bg-purple-100 transition transform hover:scale-110  px-3 py-0  mx-1 my-2 rounded-full"> <AiFillEdit size={20} /></button>
            </div>
            </div>
            
            </div>))
        
}
</div>
    )



            




}











