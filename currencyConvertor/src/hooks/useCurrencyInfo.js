import {useEffect, useState} from "react"
function useCurrencyInfo(currency){
    const[data, setData] = useState({});
    /* This line initializes a state variable data using the useState hook. The initial value of data is an empty object {}.
     The setData function is a state updater function that will be used to update the data state.*/

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((res) => setData(res[currency]));
    }, [currency])

    return data;
}

export default useCurrencyInfo;