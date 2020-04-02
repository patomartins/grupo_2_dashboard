import React, {Component} from 'react';
import Metric from './Metric';


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/signs/listAll")
            .then(res => res.json())
            .then(
                (result) => {   
                    this.setState({
                        isLoaded: true,
                        items: result.carteles, 
                  
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
                
                    
                        <Metric
                            title="Cantidad de anuncios"
                            quantity={items.meta.TotalDeProductos}  
                        /> 

                        <Metric
                            title="Cantidad de destacados"
                            quantity={items.meta.DestacadosConCincoEstrellas}
                        />
                        <Metric
                            title="Anuncios en Capital Federal"
                            quantity={items.Zona.CapitalFederal}
                        /> 
                        <Metric
                            title="Anuncios en GBA"
                            quantity={items.Zona.GranBuenosAires}
                        /> 

                  

                </React.Fragment>
            
            );
            
        }
    }
}



export default Data;