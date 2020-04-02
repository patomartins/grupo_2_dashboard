import React from 'react';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Item from './components/Item';
import Categorias from './components/Categorias';
import Lowestcost from './components/Lowestcost';
import User from './components/User';




function App() {
  return (
    <div id="wrapper">
		<div id="content-wrapper" className="d-flex flex-column">  
			<div id="content">
          <Navbar/>
				<div className="container-fluid">
            <div className="row">
              <Data />
              <Lowestcost />
              <User />
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                     <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Productos con 5 entrellas</h6>
                         </div>
                          <Item/>
                      </div>
                </div>
            <div className="col-lg-6 mb-4">
                 <div className="card shadow mb-4">
                   <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Tipo de carteles</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                           <Categorias />
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
          	</div>
                 
		
            
		</div>
            
	</div>
  );
}

export default App;
