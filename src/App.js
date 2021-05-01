import React from 'react';
import Slidebar from './PriceCard';
// import Category from './List';
import Cards from './Card';
import Navigation from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import './list.css'


export default function App() {

  const items = [
    {
      name :"Item One",
      price :"$24",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur",
     
    },
    {
      name :"Item Two",
      price :"$41",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur",
     
    },
    {
      name :"Item Three",
      price :"$14",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     
    },
   {
      name :"Item Four",
      price :"$21",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     
    },
    {
      name :"Item Five",
      price :"$98",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     
    },
    {
      name :"Item Six",
      price :"$54",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     
    },
    {
      name :"Item Seven",
      price :"$20",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     
    }]
   
const [cart, setCart] =useState([])


let addToCart = (product) => {
  setCart([...cart, product])
}
  let removeCart = (list) => {
    
  setCart(cart.filter(obj => obj.name !== list.name))

}
  return (
        <div>
          <Navigation></Navigation>
          <div class="container">
            
              <div class="row">
              <div class="col-lg-3">
              <h1 class="my-4">Category</h1>

                <div class="list-group">
                  {
                    
                    cart.map((list) => {
                      return (                        
                        <a class="list-group-item" href="#">
                          {list.name} - {list.price}
                          <span >
                          <button className="btn btn-sm btn-danger ml-4"  onClick={() => {
                            removeCart(list)
                                }}>remove</button>
                          </span>
                       </a>
                      )
                    })
                  }
                </div>
              </div>
              <Slidebar></Slidebar>
              <div className="cardfix col-lg-3 "></div>
              <div class="col-lg-9">
                    <div className="row mt-3"> 
                  {
                      items.map((obj) => {
                      return(
                          <Cards data={obj} handleCart={addToCart}  ></Cards>
                        )
                })
              }
                  </div>
              </div>
            </div>
            </div>
             <Footer></Footer>
        </div>

  )
}

 