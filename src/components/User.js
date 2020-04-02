import React, { Component } from 'react';
import Metric from './Metric';



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/api/users")
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


                    <Metric
                        title="Carteles costo menor $25000"
                        quantity={items.meta.Total}
                    />



                </React.Fragment>

            );

        }
    }
}



export default User;