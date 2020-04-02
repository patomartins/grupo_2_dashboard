import React, { Component } from 'react';
import Products from './Products';



class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/signs/starItem")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results,

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
    componentDidUpdate() {
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
              
                       
                        {items.map(item => (
                            <Products
                                image= { item.picture_filename } 
                                title = { item.address } 
                                number = { item.street_number } 
                                city = { item.city }
                            />                   
                        ))}
                        
                  



                </React.Fragment>
                   

               

            );

        }
    }
}



export default Item;