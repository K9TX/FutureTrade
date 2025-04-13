"use client";

import { useEffect } from "react";

interface PriceFetcherProps {
  symbol: string;
  onPriceUpdate: (price: number) => void;
}

export default function PriceFetcher({
  symbol,
  onPriceUpdate,
}: PriceFetcherProps) {
  useEffect(() => {
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}usdt@trade`
    );

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const price = parseFloat(data.p); // Extract the price
      onPriceUpdate(price);
    };

    return () => {
      ws.close();
    };
  }, [symbol, onPriceUpdate]);

  return null; // This component doesn't render anything
}

