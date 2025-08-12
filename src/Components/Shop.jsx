import { useEffect, useState } from "react";

function Fetch(){

    const [fetchdata, setFetchData] = useState([]);
    const [count, setCount] = useState(Array(8).fill(0));
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
                }
                
              }} > - </button>


              <h3 className="quantityCounter"> {count[index]} </h3>


              <button className="add" onClick={()=>{
                console.log("index is", count);
                if ( count[index] !== 10){
                  
                  let temp = [...count];
                  temp[index] += 1
                  setCount(temp);
                  
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


    return (

      <div className="itemsGrid">
        <Fetch/>
      </div>
    
    )
    
  }
  
  export default Shop;
  