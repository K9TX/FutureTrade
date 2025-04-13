"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [balance, setBalance] = useState(() => {
    if (typeof window !== "undefined") {
      const savedBalance = localStorage.getItem("balance");
      return savedBalance ? Number.parseFloat(savedBalance) : 1_000_000;
    }
    return 1_000_000;
  });

  const [addAmount, setAddAmount] = useState("");

  const handleAddMoney = (amount: number) => {
    setBalance((prevBalance) => {
      const newBalance = prevBalance + amount;
      localStorage.setItem("balance", newBalance.toString());
      return newBalance;
    });
  };

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white flex flex-col items-center pt-12 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">Portfolio Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#1C2127] border-gray-800 shadow-xl">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-gray-100">Cash Balance</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-green-400">
                    ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4 text-gray-300">Add Money</h3>
                  <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <Input
                      type="number"
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      placeholder="Amount to add"
                      className="bg-[#2D3339] border-gray-700 text-gray-200 placeholder-gray-500 focus:ring-blue-500"
                    />
                    <Button 
                      onClick={() => {
                        const amount = Number.parseFloat(addAmount);
                        if (!isNaN(amount) && amount > 0) {
                          handleAddMoney(amount);
                          setAddAmount("");
                        } else {
                          alert("Please enter a valid amount");
                        }
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors duration-200"
                    >
                      Add Funds
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}