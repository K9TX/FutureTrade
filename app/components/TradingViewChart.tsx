"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

interface TradingViewChartProps {
  symbol: string;
}

export default function TradingViewChart({ symbol }: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: `BINANCE:${symbol}USDT`,
          interval: "5",
          timezone: "Asia/Kolkata",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1C2127",
          enable_publishing: false,
          hide_legend: true,
          allow_symbol_change: true,
          container_id: containerRef.current.id,
          hide_side_toolbar: false,
          withdateranges: true,
          save_image: true,
          height: "100%",
          hide_volume: false,
          custom_css_url: "./chart.css",
          drawings_access: {
            type: "black",
            tools: [
              { name: "Trend Line" },
              { name: "Rectangle" },
              { name: "Fib Retracement" },
              { name: "Horizontal Line" },
              { name: "Ray" },
              { name: "Arrow Marker" },
            ],
          },
          overrides: {
            "mainSeriesProperties.style": 1,
            "mainSeriesProperties.candleStyle.upColor": "#26A69A",
            "mainSeriesProperties.candleStyle.downColor": "#EF5350",
            "mainSeriesProperties.candleStyle.borderUpColor": "#26A69A",
            "mainSeriesProperties.candleStyle.borderDownColor": "#EF5350",
            "mainSeriesProperties.candleStyle.wickUpColor": "#26A69A",
            "mainSeriesProperties.candleStyle.wickDownColor": "#EF5350",
            "paneProperties.background": "#131722",
            "paneProperties.vertGridProperties.color": "#1E222D",
            "paneProperties.horzGridProperties.color": "#1E222D",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor": "#AAA",
            "scalesProperties.lineColor": "#1E222D",
            "scalesProperties.backgroundColor": "#131722",
            "paneProperties.topMargin": 15,
            "paneProperties.bottomMargin": 15,
            "volumePaneSize": "medium",
          },
          studies_overrides: {
            "volume.volume.color.0": "#EF535070",
            "volume.volume.color.1": "#26A69A70",
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [symbol]);

  return (
    <div
      id="tradingview_widget"
      ref={containerRef}
      className="w-full h-[calc(100vh-12rem)] bg-[#131722]"
    />
  );
}
