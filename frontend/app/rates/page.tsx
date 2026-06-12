"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Prediction = {
  currency: string;
  days: number;
  prediction: string;
  recommendation: string;
  confidence: number;
  note: string;
};

export default function RatesPage() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/predict?currency=GHS")
      .then((res) => res.json())
      .then((data) => setPrediction(data));
  }, []);

  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6">
      <section className="max-w-md mx-auto">
        <Link href="/" className="text-blue-400">
          ← Back Home
        </Link>

        <h1 className="text-4xl font-bold mt-6">Live Exchange Rates</h1>

        <div className="bg-white/10 rounded-3xl p-5 mt-6">
          <h2 className="text-xl font-semibold">AI Recommendation</h2>

          {prediction ? (
            <>
              <p className="mt-4">{prediction.prediction}</p>
              <p className="text-gray-300 mt-3">{prediction.recommendation}</p>

              <div className="bg-blue-600 rounded-2xl p-4 mt-5">
                <p>AI Confidence</p>
                <p className="text-4xl font-bold">{prediction.confidence}%</p>
              </div>

              <p className="text-xs text-gray-400 mt-4">{prediction.note}</p>
            </>
          ) : (
            <p className="mt-4">Loading AI prediction...</p>
          )}
        </div>
      </section>
    </main>
  );
}