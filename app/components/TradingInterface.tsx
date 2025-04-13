"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

interface TradingInterfaceProps {
  onTrade: (type: "buy" | "sell", amount: number) => void
  currentPrice: number | null
  selectedCrypto: string
  onCryptoChange: (crypto: string) => void
  cryptocurrencies: string[]
}

export default function TradingInterface({
  onTrade,
  currentPrice,
  selectedCrypto,
  onCryptoChange,
  cryptocurrencies,
}: TradingInterfaceProps) {
  const [amount, setAmount] = useState("")

  const handleTrade = (type: "buy" | "sell") => {
    const parsedAmount = Number.parseFloat(amount)
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      onTrade(type, parsedAmount)
      setAmount("")
    } else {
      alert("Please enter a valid amount")
    }
  }

  return (
    <Card className="bg-[#0f162b] border-gray-800 shadow-lg h-auto">
      <CardHeader className="border-b border-gray-800 pb-3">
        <CardTitle className="text-xl font-bold text-white">Trade Now</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-gray-400">Cryptocurrency Select</Label>
            <Select value={selectedCrypto} onValueChange={onCryptoChange}>
              <SelectTrigger className="bg-gray-800/50 border-gray-700 text-gray-200 hover:bg-gray-800">
                <SelectValue placeholder="Select cryptocurrency" />
              </SelectTrigger>
              <SelectContent className="bg-[#1C2127] border-gray-700">
                {cryptocurrencies.map((crypto) => (
                  <SelectItem 
                    key={crypto} 
                    value={crypto}
                    className="text-gray-200 focus:bg-gray-800 focus:text-white"
                  >
                    {crypto}/USDT
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-gray-400">Amount ({selectedCrypto})</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`Enter ${selectedCrypto} amount`}
              step="0.0001"
              min="0"
              className="bg-gray-800/50 border-gray-700 text-gray-200 placeholder:text-gray-500 focus:border-blue-500"
            />
          </div>
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <Label className="text-sm text-gray-400">Current Market Price</Label>
            <div className="text-2xl font-semibold mt-1 text-white">
              ${currentPrice ? currentPrice.toFixed(2) : "Loading..."}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => handleTrade("buy")}
              className="w-full bg-green-500/20 text-green-400 hover:bg-green-500/30 border border-green-500/30"
            >
              Buy
            </Button>
            <Button
              onClick={() => handleTrade("sell")}
              className="w-full bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30"
            >
              Sell
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

