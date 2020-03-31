import React from 'react';


function Products(props) {

    return (
        
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src="{props.image}" alt="Destacado con 5 estrellas" />
                    </div>
                    <p>{props.title} {props.number}</p>
                    <p>{props.city}</p>
                </div>
          
    )
}


export default Products;