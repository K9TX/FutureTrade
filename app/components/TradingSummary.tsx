import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TradingSummaryProps {
  profitableTradesCount: number
  lossTradesCount: number
  totalTradesCount: number
  mostProfitableTrade: number
  biggestLossTrade: number
}

export default function TradingSummary({
  profitableTradesCount,
  lossTradesCount,
  totalTradesCount,
  mostProfitableTrade,
  biggestLossTrade,
}: TradingSummaryProps) {
  const profitablePercentage = (profitableTradesCount / totalTradesCount) * 100 || 0
  const lossPercentage = (lossTradesCount / totalTradesCount) * 100 || 0

  return (
    <Card className="mb-6 bg-[#1C2127] border-gray-800 max-w-4xl mx-auto">
      <CardHeader className="border-b border-gray-800">
        <CardTitle className="text-2xl font-bold text-center text-white">Trading Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Profitable Trades</h3>
            <p className="text-2xl font-bold text-green-400">
              {profitableTradesCount} 
              <span className="text-sm ml-1 text-green-500">({profitablePercentage.toFixed(2)}%)</span>
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Loss Trades</h3>
            <p className="text-2xl font-bold text-red-400">
              {lossTradesCount} 
              <span className="text-sm ml-1 text-red-500">({lossPercentage.toFixed(2)}%)</span>
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total Trades</h3>
            <p className="text-2xl font-bold text-blue-400">{totalTradesCount}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Most Profitable Trade</h3>
            <p className="text-3xl font-bold text-green-400">+${mostProfitableTrade.toFixed(2)}</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50 md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Biggest Loss Trade</h3>
            <p className="text-3xl font-bold text-red-400">-${biggestLossTrade.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

