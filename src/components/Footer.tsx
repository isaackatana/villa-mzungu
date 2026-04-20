import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Villa Mzungu</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t('footer.text')}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Explore
          </h4>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>Diani Beach, Kwale County, Kenya</p>
            <p>hello@villamzungu.com</p>
            <p>+254 700 000 000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}