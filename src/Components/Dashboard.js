import React, { useState, useEffect } from 'react';
import {
    Link,
    useLocation
} from "react-router-dom";
import axios from 'axios';
import TableStore from './TableStore';
import config from '../config';
import '../App.css';
function Dashboard(props) {
    // Declare a new state variable, which we'll call "count"
    const location = useLocation();
    const [loading, setLoading] = useState(0);
    const [storeData, setStoreData] = useState([{
        "avg": 3327.3,
        "nProducts": 24,
        "name": "Camp Cloon"
       }]);
       const [storeData2, setStoreData2] = useState([]);
    useEffect(() => {
        (async () => {
             await axios.post(config.url+`/dashboard`, {
                "url": location.state.str
            })
                .then(res => {
                    setStoreData(res.data[0].vendorTime[0].VendorA)
                    setStoreData2(res.data[0].vendorTime)
                 
                })
        
          })();
      


    }, []);

    useEffect(() => {
      
        if(storeData2.length>0){
            setLoading(1);
        }
     
      }, [storeData2]);
      const changeTime = (index) => {
        setStoreData(storeData2[index].VendorA)
      };
    return (
        <div>
            <div className="head" //onClick={() => console.log(storeData)}
            >



                <Link to="/">Home</Link>
                <br/>  <br/>  <br/>  <br/>  <br/>
                <div className="listStoresP">
                {loading?
                  <div>
                   {storeData2.map((str,index)=>{
                     return(
                         <span key={index} className="listStores" onClick={()=>changeTime(index)}>
                     {new Date(str.time).toString()}
                         </span>
                     )
                    
                  })} 
                  </div>
                
                :null}
                </div>
                <br/>  <br/>
                {loading? <TableStore data={storeData}/>:null}
             
            


            </div>
        </div>
    );
}

export default Dashboard;