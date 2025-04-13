"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { X, Trash2 } from "lucide-react";

interface Order {
  id: number;
  type: "buy" | "sell";
  symbol: string;
  amount: number;
  price: number;
  timestamp: number;
  status: "open" | "closed";
  closedPrice?: number;
  profit?: number;
}

interface OrderTableProps {
  orders: Order[];
  currentPrice: number | null;
  selectedCrypto: string;
  onSquareOff: (orderId: number) => void;
  onDeleteOrder: (orderId: number) => void;
  overallProfitLoss: number;
}

export default function OrderTable({
  orders,
  currentPrice,
  selectedCrypto,
  onSquareOff,
  onDeleteOrder,
  overallProfitLoss,
}: OrderTableProps) {
  const [isCardView, setIsCardView] = useState(false);

  const calculateProfitLoss = (order: Order) => {
    if (order.status === "closed" && order.profit !== undefined) {
      return order.profit.toFixed(2);
    }
    if (!currentPrice || order.symbol !== selectedCrypto) return "N/A";
    const diff = currentPrice - order.price;
    const profitLoss = diff * order.amount * (order.type === "buy" ? 1 : -1);
    return profitLoss.toFixed(2);
  };

  const getProfitLossClass = (value: string) => {
    if (value === "N/A") return "text-gray-200";
    const numValue = Number.parseFloat(value);
    return numValue >= 0 ? "text-green-400" : "text-red-400";
  };

  const renderCardView = () => (
    <div className="space-y-4">
      {orders.map((order) => {
        const profitLoss = calculateProfitLoss(order);
        const profitLossClass = getProfitLossClass(profitLoss);
        return (
          <Card key={order.id} className="p-4">
            <div className="flex justify-between items-center mb-2">
              <Badge variant={order.type === "buy" ? "default" : "secondary"}>
                {order.type.toUpperCase()}
              </Badge>
              <Badge
                variant={order.status === "open" ? "outline" : "secondary"}
              >
                {order.status.toUpperCase()}
              </Badge>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>Symbol: {order.symbol}</div>
              <div>Amount: {order.amount.toFixed(8)}</div>
              <div>Price: ${order.price.toFixed(2)}</div>
              <div>
                Closed Price:{" "}
                {order.closedPrice ? `$${order.closedPrice.toFixed(2)}` : "N/A"}
              </div>
              <div className={`col-span-2 ${profitLossClass}`}>
                Profit/Loss:{" "}
                {profitLoss === "N/A"
                  ? profitLoss
                  : `${profitLoss.startsWith("-") ? "" : "+"}$${profitLoss}`}
              </div>
            </div>
            <div className="flex justify-end mt-2 space-x-2">
              {order.status === "open" && (
                <Button
                  onClick={() => onSquareOff(order.id)}
                  size="icon"
                  variant="outline"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <Button
                onClick={() => onDeleteOrder(order.id)}
                size="icon"
                variant="outline"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );

  const renderTableView = () => (
    <div className="overflow-x-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b border-gray-800">
            <TableHead className="text-gray-200 font-semibold">Type</TableHead>
            <TableHead className="text-gray-200 font-semibold">Symbol</TableHead>
            <TableHead className="text-gray-200 font-semibold text-right">Amount</TableHead>
            <TableHead className="text-gray-200 font-semibold text-right">Entry   Price</TableHead>
            <TableHead className="text-gray-200 font-semibold">Status</TableHead>
            <TableHead className="text-gray-200 font-semibold text-right">Closed Price</TableHead>
            <TableHead className="text-gray-200 font-semibold text-right">Profit/Loss</TableHead>
            <TableHead className="text-gray-200 font-semibold text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const profitLoss = calculateProfitLoss(order);
            const profitLossClass = getProfitLossClass(profitLoss);
            return (
              <TableRow 
                key={order.id}
                className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors text-gray-100"
              >
                <TableCell>
                  <Badge
                    className={`${
                      order.type === "buy" 
                        ? "bg-green-500/20 text-green-400 hover:bg-green-500/30" 
                        : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                    } border-0`}
                  >
                    {order.type.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium text-gray-100">{order.symbol}</TableCell>
                <TableCell className="text-right font-mono text-gray-100">{order.amount.toFixed(8)}</TableCell>
                <TableCell className="text-right font-mono text-gray-100">${order.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge
                    variant={order.status === "open" ? "outline" : "secondary"}
                    className={`${
                      order.status === "open"
                        ? "border-blue-500 text-blue-400"
                        : "bg-gray-700 text-gray-300"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-gray-100">
                  {order.closedPrice ? `$${order.closedPrice.toFixed(2)}` : "—"}
                </TableCell>
                <TableCell className={`text-right font-mono ${profitLossClass}`}>
                  {profitLoss === "N/A"
                    ? "—"
                    : `${profitLoss.startsWith("-") ? "" : "+"}$${profitLoss}`}
                </TableCell>
                <TableCell>
                  <div className="flex justify-center space-x-2">
                    {order.status === "open" && (
                      <Button
                        onClick={() => onSquareOff(order.id)}
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 border-gray-700 hover:border-red-700 hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      onClick={() => onDeleteOrder(order.id)}
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 border-gray-700 hover:border-red-600 hover:bg-red-500/10 hover:text-red-400"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );

  return (
    <Card className="bg-[#1C2127] border-blue-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-gray-800">
        <CardTitle className="text-2xl font-bold text-white">Order History</CardTitle>
        <div className="flex items-center space-x-3 bg-gray-800/50 rounded-lg p-2">
          <Label htmlFor="view-toggle" className="text-gray-200">Table View</Label>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div
          className={`text-xl font-semibold mb-6 ${
            overallProfitLoss >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          Overall P/L: {overallProfitLoss >= 0 ? "+" : "-"}$
          {Math.abs(overallProfitLoss).toFixed(2)}
        </div>
        {isCardView ? renderCardView() : renderTableView()}
      </CardContent>
    </Card>
  );
}
