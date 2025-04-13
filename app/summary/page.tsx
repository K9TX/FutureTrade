"use client";

import { useEffect, useState } from "react";
import TradingSummary from "../components/TradingSummary";

export default function SummaryPage() {
  const [tradingStats, setTradingStats] = useState({
    profitableTradesCount: 0,
    lossTradesCount: 0,
    totalTradesCount: 0,
    mostProfitableTrade: 0,
    biggestLossTrade: 0,
  });

  useEffect(() => {
    // Load trading data from localStorage
    const orders = localStorage.getItem("orders");
    if (orders) {
      const parsedOrders = JSON.parse(orders);
      const stats = parsedOrders.reduce(
        (acc: any, order: any) => {
          if (order.status === "closed" && order.profit !== undefined) {
            if (order.profit > 0) {
              acc.profitableTradesCount++;
              acc.mostProfitableTrade = Math.max(acc.mostProfitableTrade, order.profit);
            } else if (order.profit < 0) {
              acc.lossTradesCount++;
              acc.biggestLossTrade = Math.max(acc.biggestLossTrade, Math.abs(order.profit));
            }
          }
          return acc;
        },
        {
          profitableTradesCount: 0,
          lossTradesCount: 0,
          mostProfitableTrade: 0,
          biggestLossTrade: 0,
        }
      );
      
      stats.totalTradesCount = parsedOrders.length;
      setTradingStats(stats);
    }
  }, []);

  return (
    <div className="pl-72 pr-8 py-8">
      <h1 className="text-3xl font-bold mb-6">Trade Summary</h1>
      <TradingSummary {...tradingStats} />
    </div>
  );
}