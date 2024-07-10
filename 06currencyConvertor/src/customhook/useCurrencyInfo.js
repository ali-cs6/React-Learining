//we can import buildin hooks and make use of them to do our tasks

import {useEffect, useState} from "react"

// ourown custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({}); //this initiation in useState helps to prevent crashes if api is not availble
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then((resp)=> setData(resp[currency]));
        console.log(data);
    }, [currency])
    return data;
}

export default useCurrencyInfo;