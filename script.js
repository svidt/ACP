async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '419b2c04d3msh58c399596bd736bp1c48cbjsna993f4923627',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    const res = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    const record = await res.json()
    
    document.getElementById("coins").innerHTML = "<img src='" + record.data.coins[0].iconUrl + "'/>" + record.data.coins[0].name
        + " " + "<b>" + record.data.coins[0].symbol + "</b>" + " Marketcap: " + record.data.coins[0].marketCap + " Price: $"
        + Math.round(record.data.coins[0].price) + " " + record.data.coins[0]
}

fetchData();