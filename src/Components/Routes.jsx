import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Errorpage from './Errorpage.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

const routes = [

  {
    path:"/",
    element: <Home/>,
    errorElement: <Errorpage/>,
    children : [
        {
          index:true,
          element:<About/>
        },
        {
            path:"Shop",
            element:<Shop/>
        },
        {
            path: "Cart", 
            element:<Cart/>
        }, 
        {
            path: "About",
            element:<About/>
        }


    ]
  },
  {
    path:"Home",
    element:<Home/>
  },
];

export default routes;