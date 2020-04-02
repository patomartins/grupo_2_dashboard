import React from 'react';


function Products (props) {

    return (
        
                <div className="card-products">
                     <p>{props.title} {props.number},  {props.city}</p>
                </div>     
          
    )
}


export default Products;