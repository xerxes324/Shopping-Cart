import { useEffect, useState } from "react";

function Fetch(props){
    
    const [fetchdata, setFetchData] = useState([]);
    const [count, setCount] = useState(props.state);
    
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
                
                if ( count[index] > 0 ){

                  let temp = [...count];
                  temp[index] -= 1
                  setCount(temp);
                  // props.setState(temp);
                }
                
              }} > - </button>


              <h3 className="quantityCounter"> {count[index]} </h3>


              <button className="add" onClick={()=>{
                console.log("index is", count);
                if ( count[index] !== 10){
                  
                  let temp = [...count];
                  temp[index] += 1
                  setCount(temp);
                  // props.setState(temp);
                  
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

    let [quantity, setQuantity] = useState(Array(8).fill(0)); // runs on initial mount
    console.log(quantity);

    return (
      
      <div className="itemsGrid">
        <Fetch state = {quantity} setState = {setQuantity}/>
      </div>
    
    )
    
  }
  
  export default Shop;
  