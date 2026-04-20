import { useMemo, useState } from 'react';
import Seo from '../components/Seo';
import { villa } from '../data/villa';

export default function BookingPage() {
  const [nights, setNights] = useState<number>(1);
  const [guests, setGuests] = useState<number>(1);

  const total = useMemo(() => nights * villa.priceFrom, [nights]);

  return (
    <>
      <Seo
        title="Booking | Villa Mzungu"
        description="Check dates, estimate your stay, and prepare to book Villa Mzungu in Diani Beach."
        canonicalPath="/booking"
        keywords="book villa in Diani, Villa Mzungu booking, Diani Beach reservation"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">Booking</h1>
        <p className="mt-4 text-slate-600">
          Start with a simple booking form now, then connect Stripe or M-Pesa later.
        </p>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">Check-in</span>
              <input type="date" className="rounded-xl border border-slate-300 px-4 py-3 outline-none" />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">Check-out</span>
              <input type="date" className="rounded-xl border border-slate-300 px-4 py-3 outline-none" />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">Guests</span>
              <input
                type="number"
                min={1}
                max={villa.guests}
                value={guests}
                onChange={(event) => setGuests(Number(event.target.value))}
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700">Nights</span>
              <input
                type="number"
                min={1}
                value={nights}
                onChange={(event) => setNights(Number(event.target.value))}
                className="rounded-xl border border-slate-300 px-4 py-3 outline-none"
              />
            </label>
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm text-slate-600">Guests: {guests}</p>
            <p className="mt-2 text-sm text-slate-600">Rate: ${villa.priceFrom} / night</p>
            <p className="mt-3 text-2xl font-bold text-slate-900">Estimated Total: ${total}</p>
          </div>

          <button
            type="button"
            className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Continue to Payment
          </button>
        </div>
      </section>
    </>
  );
}