import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url).then(res => {
            if(!res.ok){
                throw Error("Could not connect to server")
            }
            return res.json();
        }).then(data => {
            setData(data)
        }).catch(err =>
            alert(err.message))
    }, [url]);

    return { data }
}

export default useFetch;