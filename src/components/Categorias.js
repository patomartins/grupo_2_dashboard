import React, { Component } from 'react';



class Categorias extends Component {
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

                    <div class="col-lg-6 mb-4">
                        <div class="card bg-info text-white shadow">
                            <div class="card-body"> {items.TipoDeCartel.TipoID1}</div>
                            </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-info text-white shadow">
                            <div class="card-body"> {items.TipoDeCartel.TipoID2}</div>
                        </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                        <div class="card bg-info text-white shadow">
                            <div class="card-body"> {items.TipoDeCartel.TipoID3}</div>
                        </div>
                    </div>


                    
                       

             

                </React.Fragment>

            );

        }
    }
}



export default Categorias;