"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SendPage() {
  const [amount, setAmount] = useState(100);
  const [rate, setRate] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/rates")
      .then((res) => res.json())
      .then((data) => setRate(data.USD_GHS));
  }, []);

  const fee = amount * 0.02;
  const recipientGets = rate ? (amount - fee) * rate : 0;

  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6">
      <section className="max-w-md mx-auto">
        <Link href="/" className="text-blue-400">
          ← Back Home
        </Link>

        <h1 className="text-4xl font-bold mt-6">Send Money</h1>

        <p className="text-gray-400 mt-2">USD → GHS Transfer Preview</p>

        <div className="bg-white/10 rounded-3xl p-5 mt-6">
          <label className="text-gray-400">You send</label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full mt-3 bg-transparent text-5xl font-bold outline-none"
          />

          <p className="text-gray-400 mt-2">USD</p>
        </div>

        <div className="bg-white/10 rounded-3xl p-5 mt-5 space-y-3">
          <p>Live Rate: 1 USD = {rate || "Loading..."} GHS</p>
          <p>Fee: ${fee.toFixed(2)}</p>

          <p className="text-green-400 text-2xl font-bold">
            Recipient Gets: ₵{recipientGets.toFixed(2)}
          </p>
        </div>

        <Link href="/recipient">
          <button className="w-full bg-blue-600 rounded-2xl py-4 mt-6 font-bold hover:bg-blue-700 transition">
            Continue Transfer
          </button>
        </Link>
      </section>
    </main>
  );
}