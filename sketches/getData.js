// VARIABLES

// Constants

const API_KEY = "8KOBOUBTEF7RHR21";

// FUNCTIONS

async function getExchangeRate(from, to) {
  const requestURL = `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${from}&to_symbol=${to}&apikey=${API_KEY}`;

  // You can only do 5 calls per minute

  const response = await fetch(requestURL);
  const data = await response.json();

  const dataValuesArray = Object.entries(data["Time Series FX (Monthly)"])
    .sort(function(a, b) {
      return new Date(a[0]) - new Date(b[0]);
    })
    .map(function(item) {
      return parseFloat(item[1]["4. close"]);
    });

  return dataValuesArray;
}

async function getStonks(symbol) {
  const requestURL = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${API_KEY}`;

  const response = await fetch(requestURL);
  const data = await response.json();

  const sortedEntries = Object.entries(data["Monthly Time Series"]).sort(
    function(a, b) {
      return new Date(a[0]) - new Date(b[0]);
    }
  );

  const sharePriceArray = sortedEntries.map(function(item) {
    return parseFloat(item[1]["4. close"]);
  });

  const volumeArray = sortedEntries.map(function(item) {
    return parseFloat(item[1]["5. volume"]);
  });

  return {
    volume: volumeArray,
    sharePrice: sharePriceArray
  };
}

// call this with async / await
async function getData() {
  return {
    google: await getStonks("GOOG"),
    microsoft: await getStonks("MSFT"),
    apple: await getStonks("AAPL"),
    wetherspoons: await getStonks("JDW.LON"),
    GBPtoUSD: await getExchangeRate("GBP", "USD")
    //GBPtoEUR: await getExchangeRate("GBP", "EUR")
  };
}
