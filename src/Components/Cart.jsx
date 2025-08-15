import { useNavigate } from "react-router-dom";

function StorageFetch(){
  const cartList = JSON.parse(localStorage.getItem("cartobject"));
  const quantity = JSON.parse(localStorage.getItem("quantity"));
  console.log(quantity,"is the cart quantity");
  const nav = useNavigate();

  if ( cartList.length === 0){
    return(
      <>
        <h2 className="emptycart"> Your cart is empty. To add items, click the button below.</h2> 
        
        <button className="emptycartbutton" onClick={()=>{
          nav("../Shop")
        }} > Store </button>
      </>
    )
  }

  return(

    <>

      {cartList ? (
        cartList.map((e) => {
          return(
            <div className="cartImageDiv">
              <div className="cartImageDivLeft">
                <img className="cartImages" src = {e[1]}/>
              </div>


              <div className="cartImageDivRight">
                <div className="cartInfo" >
                  <p> {e[3]}</p>
                  <p> Total Price : ${e[2] * quantity[e[4]]} </p>
                </div>

                <div className="cartButtons">

                  <button className="subtract" onClick={ () =>{

                    cartList.forEach((element,index) => {
                      console.log(index,"is the index")
                      if(element[1] === e[1] ){

                        if ( element[0] === 0){
                          cartList.splice(index,1);
                        }

                        if(element[0] > 1){
                          element[0] -= 1;
                          quantity[element[4]] -= 1;
                        }

                        else if(element[0] === 1) {
                          console.log("yeyeyefgiydhfsd")
                          quantity[element[4]] = 0;
                          cartList.splice(index,1);
                          
                        }
                        localStorage.setItem("quantity", JSON.stringify(quantity));
                        localStorage.setItem("cartobject", JSON.stringify(cartList));
                      }

                    });

                    nav("../Shop");
                    nav("../Cart");
                    
                    }
                  }
                  > - </button>

                  <h3> {e[0]}</h3>

                  <button className="add" onClick={ () =>{
                                        cartList.forEach((element,index) => {
                      console.log(index,"is the index")
                      if(element[1] === e[1] ){

                        if ( element[0] <= 9){
                          element[0] += 1;
                          quantity[element[4]] += 1;
                        }
                        localStorage.setItem("quantity", JSON.stringify(quantity));
                        localStorage.setItem("cartobject", JSON.stringify(cartList));
                      }

                    });

                    nav("../Shop");
                    nav("../Cart");
                  }

                  } 
                  > + </button>
                </div>
              </div>
            </div>
          )
        })
      ) : (<p> Your cart is empty </p>)}

    </>
  )
}

function Cart() {
    return (
      <>
          <div className="cartBody">

            <h1 className="cartHeader"> Your Items </h1>
            <div className = "cartItems"> 
              <StorageFetch/>
            </div>
          </div>
      </>

    )
  }
  
  export default Cart;
  