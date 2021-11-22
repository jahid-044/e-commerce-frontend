import React from "react";
import Product from "./Product";
export default function customer(props){

    const item=[
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" ,Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" ,Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk",Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" ,Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk",Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity :"5", Price:"100tk" ,Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk",Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk",Category:"Cosmetics", image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,   Title:"Shampoo",Quantity:"5", Price:"100tk" , Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        { Id:1,  Title:"Shampoo", Quantity:"5", Price:"100tk", Category:"Cosmetics",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"},
        
        
    ];

    return( 
 
        <div className="flex flex-wrap   ">
            
        { item.map((data, index) => (<div key={index} className=" w-screen flex justify-around p-2   2xl:w-1/4 xl:w-1/3 md:w-1/2   w-py-2 px-4 lg:px-10 xl:py-4 xl:px-6 ">
        
       
        <div key={data.Id} className=" bg-yellow-400 border-2 pt-2 flex rounded-lg m-3 ">
        <Product item={data}/> 
        </div>
     
      

</div>
))
}
        </div>
    )





}

