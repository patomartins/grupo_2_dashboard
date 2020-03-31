import React, {Component} from 'react';
import Metric from './Metric';
import Products from './Producto';



class Api extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
  

    componentDidMount() {
        fetch("http://localhost:3001/api/sign")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result, 
                  
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    componentDidUpdate(){
        console.log("actualicé")


    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                   <React.Fragment>
                    <div className="row">
                        <	Metric
                            color="border-left-primary"
                            icon="fas fa-clipboard-list fa-2x text-gray-300"
                            title="Cantidad de productos"
                            quantity={items.cantidad} 
                        />

                        <Metric
                            color="border-left-success"
                            icon="fas fa-dollar-sign fa-2x text-gray-300"
                            title="Destacados con 5 estrellas"
                            quantity={items.cantidad} 
                        />
                        <Metric
                            color="border-left-warning"
                            title="Productos baratos"
                            quantity={items.cantidad} 
                        />

                    </div> 
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Productos con 5 entrellas</h6>
                                </div>
                    
                            {items.provincias.map(item => (
            
                                    <Products
                                        image="Imagen Productos"
                                        title={item.nombre}
                                        number={item.nombre}
                                        city="ciudad"
                                    />
                               
                            ))}
                      
                        </div>
                        </div>
                      
                    <Products
                        image = "Imagen Productos"
                        number = "Titulo"
                        city  = "ciudad"
                    />
                    </div>
                   


                </React.Fragment>
            
                   
               
                

            );
            
        }
    }
}



export default Api;