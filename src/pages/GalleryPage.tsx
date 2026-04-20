import Seo from '../components/Seo';

const placeholders = [
  'Living Area',
  'Bedroom',
  'Pool View',
  'Kitchen',
  'Outdoor Space',
  'Diani Experience',
];

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | Villa Mzungu"
        description="Browse the Villa Mzungu gallery and preview the villa spaces, pool atmosphere, and Diani Beach experience."
        canonicalPath="/gallery"
        keywords="Villa Mzungu gallery, Diani Beach photos, villa images Kenya"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">Gallery</h1>
        <p className="mt-4 text-slate-600">
          Add your villa and destination images here to create a premium visual experience.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((item) => (
            <div
              key={item}
              className="flex aspect-[4/3] items-end rounded-[2rem] bg-slate-200 p-6 text-lg font-semibold text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}