import React, { useEffect, useState } from "react";

const CoinTable = () => {
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrypto(data.coins);
      });
  }, []);
  return (
    <table className="w-[95%] min-h-[150vh]">
      <tr className="bg-yellow-500 text-black h-14">
        <th className="w-[35%] text-left pl-7">Coin</th>
        <th className="w-[25%]">Price</th>
        <th className="w-[15%]">Change</th>
        <th className="w-[25%]">Market Cap</th>
      </tr>
      {crypto?.map((coin) => {
        // console.log(crypto);

        return (
          <tr className="h-40 border-b w-[95%] text-center ">
            <td className="pl-10 w-[35%]">
              <span className="text-left">
                <img className="h-[60px] w-[60px]" src={coin.item.small} />
                <h3>{coin.item.symbol}</h3>
                <p>{coin.item.name}</p>
              </span>
            </td>
            <td className="w-[25%]">{coin.item.data.price}</td>
            <td className="text-green-700 w-[15%]">
              +{coin.item.market_cap_rank}
            </td>
            <td className="w-[25%]">{coin.item.data.market_cap}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default CoinTable;
