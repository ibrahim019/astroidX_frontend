import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";
import config from '../config';
function AddStore() {
    // Declare a new state variable, which we'll call "count"
    const [name, setName] = useState("https://www.");
    const [store, setStore] = useState([]);
    useEffect(() => {
        axios.get(config.url)
            .then(res => {
                let result = res.data.map(({ name }) => name)
                //console.log(result)
                setStore(result)
                console.log(store)
            })
    }, []);
    const addStore = () => {
        axios.post(config.url,{
            "url":name
        })
            .then(res => {
           
                setStore([...store, res.data.url])
                setName("https://www.")
                console.log(store)
            })
      };
      const deleteStore = (str) => {
        axios.post(config.url+"/delete",{
            "url":name
        })
            .then(res => {
                setStore(store.filter((e)=>(e !== str)));
         
            })
      };
    return (
        <div>
            <div className="head" onClick={()=>console.log(store)}>



                <Link 
                >Dashboard</Link>


            </div>
            
            <header className="App-header">
           
                <img src={logo} className="App-logo" alt="logo" />
                <div className="listStoresP">
                {store.map((str)=>{
                    return(
                        <div className="listStores" 
                        >
                        <Link to={{
                          pathname: '/dashboard',
                            state: {
                           str: str
                                    }
                            }}>{str}</Link> <span className="close" onClick={()=>deleteStore(str)}>x</span>
                    </div>
                    )
                  
                })}
                </div>
                <label>
                    <input type="text" name="name" placeholder={"add store"} value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={() => addStore()}>
                        Add Store
                 
      </button>
                </label>


            </header>
        </div>
    );
}

export default AddStore;