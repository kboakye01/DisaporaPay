"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Rates = {
  USD_GHS: number;
  USD_NGN: number;
  USD_KES: number;
  USD_ZAR: number;
};

export default function Home() {
  const [rates, setRates] = useState<Rates | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/rates")
      .then((res) => res.json())
      .then((data) => setRates(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6">
      <section className="max-w-md mx-auto pb-24">
        <div className="flex items-center justify-between mb-8">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold">
            K
          </div>

          <div className="bg-white/10 rounded-full px-5 py-3 text-gray-300 w-52">
            Search
          </div>

          <Link
            href="/rates"
            className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center"
          >
            📊
          </Link>
        </div>

        <p className="text-gray-300 mb-2">🇬🇭 Main · GHS</p>

        <h1 className="text-6xl font-bold mb-2">
          ₵9,450<span className="text-2xl">.14</span>
        </h1>

        <p className="text-gray-400 mb-8">Default DiasporaPay Wallet</p>

        <div className="grid grid-cols-4 gap-4 mb-8 text-center">
          {["+", "⇄", "≡", "•••"].map((item, index) => (
            <div key={index}>
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-600/40 flex items-center justify-center text-2xl">
                {item}
              </div>
              <p className="text-sm mt-2 text-gray-300">
                {["Add", "Move", "Details", "More"][index]}
              </p>
            </div>
          ))}
        </div>

        <Link href="/rates">
          <div className="bg-white/10 rounded-3xl p-5 mb-6 cursor-pointer hover:bg-white/20 transition">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold mb-3">
                Live Exchange Rates
              </h2>
              <span className="text-blue-400 text-sm">View →</span>
            </div>

            {rates ? (
              <div className="space-y-2 text-gray-300">
                <p>USD → GHS: {rates.USD_GHS}</p>
                <p>USD → NGN: {rates.USD_NGN}</p>
                <p>USD → KES: {rates.USD_KES}</p>
                <p>USD → ZAR: {rates.USD_ZAR}</p>
              </div>
            ) : (
              <p className="text-gray-400">Loading live rates...</p>
            )}

            <p className="text-gray-400 text-sm mt-4">
              Tap to view charts, previous rates, and AI prediction.
            </p>
          </div>
        </Link>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white/10 rounded-3xl p-5">
            <h2 className="text-xl font-semibold">Transfer</h2>
            <p className="text-gray-400 mt-2">Send money home</p>
          </div>

          <Link href="/rates">
            <div className="bg-white/10 rounded-3xl p-5 cursor-pointer hover:bg-white/20 transition">
              <h2 className="text-xl font-semibold">AI Advice</h2>
              <p className="text-gray-400 mt-2">Best time to send</p>
            </div>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mb-4">Recent transactions</h2>

        <div className="bg-white/10 rounded-3xl overflow-hidden mb-6">
          {[
            ["🇺🇸", "USD → GHS", "+₵150.64"],
            ["🔗", "Sent via payout link", "-₵75.00"],
            ["👤", "To Daniel", "-₵120.00"],
            ["➕", "Top up wallet", "+₵500.00"],
          ].map((tx, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-5 border-b border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center">
                  {tx[0]}
                </div>

                <div>
                  <p className="font-semibold">{tx[1]}</p>
                  <p className="text-sm text-gray-400">Today, 11:{index}7 AM</p>
                </div>
              </div>

              <p
                className={
                  tx[2].startsWith("+")
                    ? "text-green-400 font-bold"
                    : "text-white font-bold"
                }
              >
                {tx[2]}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-3xl p-5">
          <p className="text-gray-400">Diaspora Score</p>

          <h2 className="text-4xl font-bold mt-2">
            720 <span className="text-green-400 text-xl">↑ 40</span>
          </h2>

          <p className="text-green-400 mt-2">Good score</p>
        </div>

        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#06111f] border border-white/10 rounded-full px-6 py-4 flex justify-between text-sm">
          <span className="text-blue-400">Home</span>
          <span>Cards</span>
          <span>Transfers</span>
          <Link href="/rates" className="hover:text-blue-400">
            AI
          </Link>
        </nav>
      </section>
    </main>
  );
}