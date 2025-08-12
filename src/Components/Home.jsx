import { Outlet } from 'react-router-dom';
import '../Styles/App.css';
import { useNavigate } from 'react-router-dom';



function HomeDesign(){

  const nav = useNavigate();
  return(
    <>
      <div className = "header">
          <h1> </h1>
          <div className = "header-buttons">

            <button onClick={
              ()=>{
                nav("./About")
              }
            }><h4> About </h4></button>

            <button onClick={
              () => {
                nav("./Shop")
              }
            }><h4> Shop </h4></button>
            
            <button onClick={
              ()=>{
                nav("./Cart")
              }
            } ><h4> Cart </h4></button>
          </div>

      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <HomeDesign/>
      <Outlet/>
    </>
    
  )
  
}

export default Home;
