import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY, RAPID_API_HOST} from '@env'

// const rapidApiKe = RAPID_API_KEY;
// const rapidApiHost = RAPID_API_HOST

const useFetch = (endPoint, query)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endPoint}`,
        headers: {
            'X-RapidAPI-Key': '82f60f6da5msh7af89b4cf782275p1d2fafjsn69384efe6f03',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {...query},
        
      };

      const fetchData = async ()=>{
        setIsLoading(true)
        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
      }

      useEffect(()=>{
        fetchData();
      },[])

      const refetchData = ()=>{
        setIsLoading(true);
        fetchData()
      }
     
      return {data, isLoading, error, refetchData}
}

export default useFetch