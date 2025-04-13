"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Zap, Shield, Binary } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-white pl-[288px] pr-8 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About K9TX</h1>
        
        <Card className="bg-[#1C2127] border-gray-800 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Why Choose K9TX?</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 space-y-6">
            <p>
              K9TX is a cutting-edge paper trading platform designed for cryptocurrency enthusiasts
              who want to practice trading strategies without risking real money. Our platform
              combines powerful features with an intuitive interface to provide the best
              trading experience.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1C2127] border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-Time Data</h3>
                  <p className="text-gray-400">
                    Experience real-time price updates and market data for accurate trading simulation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C2127] border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <BadgeCheck className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Risk-Free Practice</h3>
                  <p className="text-gray-400">
                    Perfect your trading strategies without risking real capital.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C2127] border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Binary className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced Charts</h3>
                  <p className="text-gray-400">
                    Professional-grade TradingView charts with technical analysis tools.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1C2127] border-gray-800 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Tracking</h3>
                  <p className="text-gray-400">
                    Detailed trade history and performance analytics to improve your strategy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
