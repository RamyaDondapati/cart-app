import Header from "./Components/Header";
import Card from "./Components/Cart";
import {useState} from "react";
import Total from "./Components/Total";

let products=[
  {
    name:"Redmi 9pro max",
    path:"https://vlebazaar.in/image/cache/wp/gj/OnePlus-Nord-CE-2-Lite-5G-Blue-Tide-6GB-RAM-128GB-Storage-B09WQYFLRX/OnePlus-Nord-CE-2-Lite-5G-Blue-Tide-6GB-RAM-128GB-Storage-B09WQYFLRX-550x550.webp",
    price:20000,
  },
  {
    name:"Realme 85g",
    path:"https://www.tecno-mobile.in/storage/images/20220829/75fac631cc461e751dcbfc4e2a570bed.jpg",
    price:21000,
  },
  {
    name:"Realme 6pro",
    path:"https://opsg-img-cdn-gl.heytapimg.com/epb/202210/12/sJMzRjsmoZBlgvbc.png",
    price:25000,
  },
  {
    name:"Apple 11promax",
    path:"https://www.dailyexcelsior.com/wp-content/uploads/2021/07/Realme_1260x960.jpg",
    price:135000,
  },
];

function App() {
  let [cartItems,setCartItems]=useState(0);
  let [total,setTotal]=useState(0);
  function addCartItem(){
    setCartItems(cartItems+1)
  }
  function decreaseCartItem(){
    setCartItems(cartItems-1)
  }
  function changeTotal(t){
    setTotal(total+t)

  }
  return (
    <>
    
    <Header cartItems={cartItems}/>
    <main>
    {products.map((e,i)=>( 
   <Card 
   changeTotal={changeTotal}
   addCartItem={addCartItem}
   decreaseCartItem={decreaseCartItem}
   key={i} 
   product={e}
   />))}
    </main>
    <Total total={total}/>

    </>
  );
}

export default App;