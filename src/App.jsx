import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CryptoCoins from "./components/CryptoCoins";

const App = () => {
  const [crypto, setCrypto] = useState(null);

  const setCoins = async () => {
    const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
    const data = await res.json();
    setCrypto(data);
    console.log(crypto);
  };

  useEffect(() => {
    setCoins();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <CryptoCoins />
    </>
  );
};

export default App;
