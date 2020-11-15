import React, { useState, useEffect } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import axios from 'axios';
import { useTable } from 'react-table'
import TableStore from './TableStore';
import config from '../config';
function Dashboard(props) {
    // Declare a new state variable, which we'll call "count"
    const location = useLocation();
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(0);
    const [storeData, setStoreData] = useState([{
        "avg": 3327.3,
        "nProducts": 24,
        "name": "Camp Cloon"
       }]);
    useEffect(() => {
        (async () => {
            const result = await axios.post(config.url+`/dashboard`, {
                "url": location.state.str
            })
                .then(res => {
                    setStoreData(res.data[0].vendorTime[0].VendorA)
                    setLoading(1)
                 
                })
        
          })();
      


    }, []);

    const data = React.useMemo(
        () => [
          {
            "avg": 37.3,
        "nProducts": 24,
        "name": "Camp Cloon"
          }
         
        ],
        []
      )
 
    return (
        <div>
            <div className="head" //onClick={() => console.log(storeData)}
            >



                <Link to="/">Home</Link>
                <br/>  <br/>  <br/>  <br/>  <br/>
                {loading? <TableStore data={storeData}/>:null}
             
            


            </div>
        </div>
    );
}

export default Dashboard;