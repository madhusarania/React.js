import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, Setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`
    )
      .then((res) => {
        res.json();
      })
      .then((res) => Setdata(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
