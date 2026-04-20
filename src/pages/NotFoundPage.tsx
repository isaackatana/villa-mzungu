import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Villa Mzungu"
        description="The page you are looking for could not be found."
        canonicalPath="/404"
      />

      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">404</p>
        <h1 className="mt-4 text-4xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you tried to open does not exist or may have moved.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back to home
        </Link>
      </section>
    </>
  );
}