import axios from 'axios';
import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoins();
  }, []);
  const APIURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const getCoins = () => {
    axios.get(APIURL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }
    }).then((res) => {
      console.log(res.data);
      setCoins(res.data);
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div className="App">
      <h1> My Crypto-Check</h1>
      <div className='search-box'>
        <input type='search' placeholder='Find currency here' onChange={handleChange} value={search} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Symbol</th>
              <th>Market_cap</th>
              <th>Volume</th>
              <th>Price_change</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredCoins.map((coin) => {
                return (
                  <tr key={coin.id}>
                    <td><img src={coin.image} alt='' /></td>
                    <td>{coin.name}</td>
                    <td>${coin.current_price}</td>
                    <td>{coin.symbol}</td>
                    <td>${coin.total_volume.toLocaleString()}</td>
                    <td>{coin.market_cap.toLocaleString()}</td>
                    <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
