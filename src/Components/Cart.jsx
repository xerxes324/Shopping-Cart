function StorageFetch(){
  const cartList = JSON.parse(localStorage.getItem("cartobject"));
  // console.log(cartList.length, "is the length");
  // console.log(cartList, "is the list");
  console.log(cartList)

  return(

    <>

      {cartList ? (
        cartList.map((e,index) => {
          return(
            <div className="cartImageDiv">


              <div className="cartImageDivLeft">
                <img className="cartImages" src = {e[1]}/>
              </div>


              <div className="cartImageDivRight">
                <div className="cartInfo" >
                  <p> {e[3]}</p>
                  <p> Price : ${e[2]} </p>
                </div>



                <div className="cartButtons">

                  <button  > - </button>

                  <h3> {e[0]}</h3>
                  <button> + </button>


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
  