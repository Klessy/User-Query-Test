import { useState, useEffect } from "react";

export const useFetch = () => {
    const [data, setData] = useState([]);
    const url = "https://reqres.in/api/users/";
    
    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url);
          const data = await response.json();
          setData(data.data);
        }
        fetchMovies();
      }, [url]);
    
    return { data }
}