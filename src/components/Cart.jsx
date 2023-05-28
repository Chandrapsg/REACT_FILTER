import React from "react";
import Avatar from "./Avatar";
import Details from "./Details"

function Cart(props){
    return(
        <div>
          <div className="card">
            <div className="top">
              {/* <p>{props.id}</p> */}
              <h2 className="name">{props.name}</h2>
              <Avatar img = {props.img}/>
            </div>
             <div className="bottom">
             <Details
             detailsinfo = {props.email} />
             <Details
             detailsinfo = {props.tel} />            
            
             </div>
            
          </div>
        </div>
    );
}

export default Cart;