import React, { useEffect, useState } from "react";
import CoinTable from "./CoinTable";

const CryptoCoins = () => {
  return (
    <div className="min-h-[350vh] bg-[#14161A] text-white">
      <h1 className="text-4xl font-semibold flex justify-center pt-4 pb-8 text-center">
        CryptoCurrency Price On Market Cap
      </h1>
      <div className="flex items-center justify-center pb-4">
        <input
          className="h-12 w-[95%] bg-transparent pl-3 border "
          type="text"
          placeholder=" Search Crypto Currency"
        />
      </div>
      <div className="flex items-center justify-center">
        <CoinTable />
      </div>
    </div>
  );
};

export default CryptoCoins;
