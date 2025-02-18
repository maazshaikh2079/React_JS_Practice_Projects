import { useEffect, useState } from "react";

// API Links:-
// Old: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json
// New: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
// Fixed Date: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json
// Repo: https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file

function useCurrencyInfo (currency) {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response) => response.json())
        .then((responseData) => setData(responseData[currency]))
    }, [currency]);

    console.log(data);

    return data;
}

export default useCurrencyInfo;
