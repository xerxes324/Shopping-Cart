import { useNavigate } from "react-router-dom";
import wallpaperImg from "../Assets/wallpaper.webp";

function About() {

    const nav = useNavigate();
    return (
      <>
        <div className="wallpaper-About" >
            <img src = {wallpaperImg}/>
            <button className="startShop" onClick={ () => {
              nav("../Shop");
            }}> Start Shopping </button>
        </div>
      </>
    )
  }
  
  export default About;
  