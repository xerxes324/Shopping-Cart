import { useEffect, useState } from "react";

function Fetch(props){
    
    const [fetchdata, setFetchData] = useState([]);
    // const [count, setCount] = useState(props.state);
    

    const itemInfo = [];


    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setFetchData(data));
  },[])
  // console.log("fetch data is", fetchdata);



  if( fetchdata.length > 0 ){
    let temp = fetchdata.slice(0,8);
    temp.map((e) => {
      itemInfo.push([e.category, e.id , e.image, e.price, e.title]);
    })
  }
  // props.setState(count);
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
                  // props.setState(temp);
                  localStorage.setItem("quantity", JSON.stringify(temp))
                }
                
              }} > - </button>


              <h3 className="quantityCounter"> {props.state[index]} </h3>


              <button className="add" onClick={()=>{
                // console.log("index is", props.state);
                if ( props.state[index] !== 10){
                  
                  let temp = [...props.state];
                  temp[index] += 1
                  props.setState(temp);
                  // props.setState(temp);
                  // localStorage.clear();
                  localStorage.setItem("quantity", JSON.stringify(temp));
                  
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
      
      <div className="itemsGrid">
        <Fetch state = {quantity} setState = {setQuantity}/>
      </div>
    
    )
    
  }
  
  export default Shop;
  