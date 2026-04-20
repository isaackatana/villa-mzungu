import Seo from '../components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Diani Beach | Villa Mzungu"
        description="Learn more about Diani Beach, Kwale County, and the coastal experience surrounding Villa Mzungu."
        canonicalPath="/about-diani"
        keywords="About Diani Beach, Kwale County tourism, Kenya coast holiday"
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">About Diani Beach</h1>
        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="leading-7 text-slate-700">
            Diani Beach is one of Kenya’s most beautiful coastal destinations, known for white sand,
            turquoise waters, palm-lined shores, and a balance of relaxation and adventure.
          </p>
          <p className="mt-4 leading-7 text-slate-700">
            Guests can enjoy local cuisine, nearby attractions, and day trips around Kwale County.
          </p>
        </div>
      </section>
    </>
  );
}