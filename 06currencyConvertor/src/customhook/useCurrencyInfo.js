//we can import buildin hooks and make use of them to do our tasks

import {useEffect, useState} from "react"

// ourown custom hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((resp) => resp.json())
        .then((resp)=> setData(resp[currency]));
        console.log(data);
    }, [currency])
    return data;
}

export default useCurrencyInfo;