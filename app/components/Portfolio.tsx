"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PortfolioProps {
  balance: number
  onAddMoney: (amount: number) => void
}

export default function Portfolio({ balance, onAddMoney }: PortfolioProps) {
  const [addAmount, setAddAmount] = useState("")

  const handleAddMoney = () => {
    const amount = Number.parseFloat(addAmount)
    if (!isNaN(amount) && amount > 0) {
      onAddMoney(amount)
      setAddAmount("")
    } else {
      alert("Please enter a valid amount")
    }
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Cash Balance</h3>
            <p className="text-2xl font-bold">${balance.toFixed(2)}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Add Money</h3>
            <div className="flex space-x-2">
              <Input
                type="number"
                value={addAmount}
                onChange={(e) => setAddAmount(e.target.value)}
                placeholder="Amount to add"
              />
              <Button onClick={handleAddMoney}>Add</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

