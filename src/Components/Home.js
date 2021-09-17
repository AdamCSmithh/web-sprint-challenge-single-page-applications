import React from "react";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="homePage">
           <nav>
             <Link to="/pizza"><p><button id="order-pizza">Order Pizza!</button></p></Link>           
           </nav>
       </div>
          );
}

       export default Home;