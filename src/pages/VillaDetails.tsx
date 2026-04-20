import Seo from '../components/Seo';
import { villa } from '../data/villa';

export default function VillaDetails() {
  return (
    <>
      <Seo
        title="Villa Details | Villa Mzungu"
        description="Explore the features of Villa Mzungu in Diani Beach: 2 bedrooms, 2 bathrooms, space for 4 guests, kitchen, pool, parking, and a relaxing coastal setting."
        canonicalPath="/villa-details"
        keywords="villa details, Diani Beach apartment, Kenya holiday rental, Villa Mzungu rooms"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">{villa.name}</h1>
        <p className="mt-4 text-lg text-slate-600">{villa.location}</p>

        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="leading-7 text-slate-700">
            A delightful two-bedroom, two-bathroom condominium suitable for up to four guests.
            Ideal for couples or small families seeking a relaxing retreat in Diani Beach.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">Bedrooms: {villa.bedrooms}</div>
            <div className="rounded-2xl bg-slate-50 p-5">Bathrooms: {villa.bathrooms}</div>
            <div className="rounded-2xl bg-slate-50 p-5">Guests: {villa.guests}</div>
            <div className="rounded-2xl bg-slate-50 p-5">Minimum stay: {villa.minStay} night</div>
          </div>
        </div>
      </section>
    </>
  );
}