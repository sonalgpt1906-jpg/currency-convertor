// hooks are special functions that let you use react features
// A custom hook is simply a JavaScript function
//whose name starts with use
// can call other React hooks like useState, useEffect, etc.



// useEffect fetches currency data from the API when the currency changes.
// useState stores that fetched data and causes the component to show the updated values.
//That's why these two hooks are commonly used together for API requests


//custom hook desigining
import { useEffect, useState } from "react"
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // API
    //  ↓
    // fetch()
    //  ↓
    // res.json()
    //  ↓
    // setData(...)
    //  ↓
    // useState stores it
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency] || {}))
        console.log(data);
    }, [currency])
    // useEffect
    //     ↓
    // fetch()
    //     ↓
    // API response
    //     ↓
    // setData(...)
    //     ↓
    // useState updates
    //     ↓
    // React re-renders
    // ↓
    // Updated data appears in UI



    //API call => Asynchronous Operations(An asynchronous operation is a task that takes some time to complete, but JavaScript doesn't wait for it to finish. Instead, it continues executing the next lines of code.)

    //.then() chaining is used with Promises to perform asynchronous operations one after another.
    console.log(data);
    return data;
}
export default useCurrencyInfo;
// App component
//       ↓
// calls useCurrencyInfo("usd")
//       ↓
// Hook fetches data
//       ↓
// useState stores data
//       ↓
// return data
//       ↓
// App receives data as currencyInfo
//       ↓
// App uses currencyInfo in UI