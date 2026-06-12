import Link from "next/link";

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#020817] text-white px-5 py-6">
      <section className="max-w-md mx-auto">
        <Link href="/recipient" className="text-blue-400">
          ← Back to Recipient
        </Link>

        <h1 className="text-4xl font-bold mt-6">
          Review Transfer
        </h1>

        <p className="text-gray-400 mt-2">
          Confirm your transfer details before continuing.
        </p>

        <div className="bg-white/10 rounded-3xl p-5 mt-6 space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-400">You send</span>
            <span className="font-bold">$100.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Fee</span>
            <span className="font-bold">$2.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Recipient gets</span>
            <span className="font-bold text-green-400">
              ₵1,500.00
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Recipient</span>
            <span className="font-bold">
              Daniel Mensah
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Destination</span>
            <span className="font-bold">
              Ghana
            </span>
          </div>
        </div>

        <Link
          href="/success"
          className="block w-full bg-blue-600 rounded-2xl py-4 mt-6 font-bold hover:bg-blue-700 transition text-center"
        >
          Confirm Transfer
        </Link>
      </section>
    </main>
  );
}