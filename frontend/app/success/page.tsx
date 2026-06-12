import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6 flex items-center">
      <section className="max-w-md mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center mx-auto text-5xl">
          ✅
        </div>

        <h1 className="text-4xl font-bold mt-8">Transfer Successful</h1>

        <p className="text-gray-400 mt-4">
          Your transfer preview has been completed successfully.
        </p>

        <div className="bg-white/10 rounded-3xl p-5 mt-8 text-left space-y-3">
          <p>Amount sent: $100.00</p>
          <p>Recipient gets: ₵1,500.00</p>
          <p>Status: Simulation complete</p>
        </div>

        <Link href="/">
          <button className="w-full bg-blue-600 rounded-2xl py-4 mt-8 font-bold">
            Back to Dashboard
          </button>
        </Link>
      </section>
    </main>
  );
}