"use client";

import Link from "next/link";
import { useState } from "react";

export default function RecipientPage() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("Ghana");
  const [account, setAccount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6">
      <section className="max-w-md mx-auto">
        <Link href="/send" className="text-blue-400">
          ← Back to Send
        </Link>

        <h1 className="text-4xl font-bold mt-6">Recipient Details</h1>

        <p className="text-gray-400 mt-2">
          Add who will receive the money.
        </p>

        <div className="space-y-5 mt-8">
          <div className="bg-white/10 rounded-3xl p-5">
            <label className="text-gray-400">Recipient Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Daniel Mensah"
              className="w-full mt-3 bg-transparent outline-none text-xl"
            />
          </div>

          <div className="bg-white/10 rounded-3xl p-5">
            <label className="text-gray-400">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-3 bg-[#020817] outline-none text-xl"
            >
              <option>Ghana</option>
              <option>Nigeria</option>
              <option>Kenya</option>
              <option>South Africa</option>
              <option>United States</option>
            </select>
          </div>

          <div className="bg-white/10 rounded-3xl p-5">
            <label className="text-gray-400">Bank / Mobile Money Number</label>
            <input
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              placeholder="Account or MoMo number"
              className="w-full mt-3 bg-transparent outline-none text-xl"
            />
          </div>

          <div className="bg-white/10 rounded-3xl p-5">
            <label className="text-gray-400">Purpose of Transfer</label>
            <input
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Family support, school fees, business..."
              className="w-full mt-3 bg-transparent outline-none text-xl"
            />
          </div>
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 rounded-2xl py-4 mt-6 font-bold"
        >
          Save Recipient
        </button>

        {saved && (
          <div className="bg-green-500/20 border border-green-500 rounded-3xl p-5 mt-5">
            <h2 className="text-xl font-bold text-green-400">
              Recipient Saved ✅
            </h2>
            <p className="text-gray-300 mt-2">
              {name || "Recipient"} in {country} has been added successfully.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}