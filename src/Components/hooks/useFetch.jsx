import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = ( name = false) => {

    const [starwars, setStarwars] = useState([]);
    
    useEffect(() => {
        axios.get("https://swapi.py4e.com/api/people/") 
        .then((resp) => {
          let data
            data = resp.data.results
            data = name ? data.find(product=>product.name===name)
                      : data
        setStarwars(data) 
     
       

        })
        .catch(error=>console.log(error))


      
    }, [name]);
 
    return {starwars}

}