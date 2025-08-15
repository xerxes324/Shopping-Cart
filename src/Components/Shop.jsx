import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Fetch(props){
    
    const nav = useNavigate();
    const [fetchdata, setFetchData] = useState([]);
    const itemInfo = [];


    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setFetchData(data));
  },[])

  if( fetchdata.length > 0 ){
    let temp = fetchdata.slice(0,8);
    temp.map((e) => {
      itemInfo.push([e.category, e.id , e.image, e.price, e.title]);
    })
  }
  return(
    <>
    {itemInfo.map((e, index) => {
      return(
        <div className="itemcard" key = {index}>
          <img className = "itemImage" src= {e[2]} />
          <div className="information" >
            <h3> {e[4]}</h3>
            <h2> ${e[3]} </h2>

            <div className="counterButton">

              <button className="subtract" onClick={()=>{
                
                if ( props.state[index] > 0 ){

                  let temp = [...props.state];
                  temp[index] -= 1
                  props.setState(temp);
                  localStorage.setItem("quantity", JSON.stringify(temp))

                  let storageTemp = [];
                  const existingCartItems = JSON.parse(localStorage.getItem("cartobject"));

                  if(storageTemp && existingCartItems){
                    storageTemp.push(...existingCartItems);
                  }
                  
                  storageTemp.forEach((element, index) => {
                    console.log(element);
                    console.log(e[2],"is the e");
                    if ( element[1] === e[2]){
                      storageTemp.splice(index,1);
                    }
                  });
                  if ( temp[index] > 0){
                    storageTemp.push([temp[index], e[2], e[3], e[4], index]);
                  }
                  
                  localStorage.setItem("cartobject", JSON.stringify(storageTemp));

                  nav("../Cart");
                  nav("../Shop");

                }
                
              }} > - </button>


              <h3 className="quantityCounter"> {props.state[index]} </h3>


              <button className="add" onClick={()=>{
                if ( props.state[index] !== 10){
                  
                  let temp = [...props.state];
                  temp[index] += 1
                  props.setState(temp);
                  localStorage.setItem("quantity", JSON.stringify(temp));

                  let storageTemp = [];
                  const existingCartItems = JSON.parse(localStorage.getItem("cartobject"));

                  if(storageTemp && existingCartItems){
                    storageTemp.push(...existingCartItems);
                  }

                  storageTemp.forEach((element, index) => {
                    console.log(element);
                    console.log(e[2],"is the e");
                    if ( element[1] === e[2]){
                      storageTemp.splice(index,1);
                    }
                  });

                  storageTemp.push([temp[index], e[2], e[3], e[4],index])
                  console.log(storageTemp.length);
                  localStorage.setItem("cartobject", JSON.stringify(storageTemp));
                }
              }} > + </button>
            </div>

          </div>
          
              
        </div>
      )

    })}
      
    </>


  )

}

function Shop() {
  
    const [quantity, setQuantity] = useState( () => {
      return(
        JSON.parse(localStorage.getItem("quantity")) || Array(8).fill(0)
      )
      
    })
    
    // console.log(quantity, "is the quantity");


    return (
      <>
      <div className="ourproducts">
        <h1> Our Products </h1>
      </div>

      <div className="itemsGrid">
        <Fetch state = {quantity} setState = {setQuantity}/>
      </div>
      </>
    
    )
    
  }
  
  export default Shop;
  