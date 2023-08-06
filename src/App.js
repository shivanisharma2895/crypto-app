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
    axios.get(APIURL).then((res) => {
      console.log(res.data);
      setCoins(res.data);
    })
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div className='search-box'>
        <input type='search' placeholder='Find currency here' onChange={handleChange} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Symbol</th>
              <th>Market_cap</th>
              <th>Volumn</th>
              <th>Image</th>
              <th>Price_change</th>
            </tr>
          </thead>
          <tbody>
            {
              coins.map((coin) => {
                return (
                  <tr key={coin.id}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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
