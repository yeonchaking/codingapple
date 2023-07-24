import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.js';
import { useState } from 'react';

function App() {
  let [shoes] = useState(data);
  return (
    <div >
      <img src="/jeri.jpg" style={ {width : 500} }/> 
      <div className="container">
      <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>{ shoes[0].title }</h4>
            <p>{ shoes[0].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>{ shoes[1].title }</h4>
            <p>{ shoes[1].price }</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>{ shoes[2].title }</h4>
            <p>{ shoes[2].price }</p>
          </div>
        </div>
    </div> 
    </div>
  );
}

export default App;
