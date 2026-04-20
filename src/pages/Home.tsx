import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  Users,
  BedDouble,
  Bath,
  CalendarDays,
  CheckCircle2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { villa } from '../data/villa';
import Seo from '../components/Seo';

import hero1 from '../assets/hero/hero1.jpg';
import hero2 from '../assets/hero/hero2.jpg';
import hero3 from '../assets/hero/hero3.jpg';
import hero4 from '../assets/hero/hero4.jpg';

const heroImages = [hero1, hero2, hero3, hero4];

export default function Home() {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, label: t('highlights.guests'), value: villa.guests },
    { icon: BedDouble, label: t('highlights.bedrooms'), value: villa.bedrooms },
    { icon: Bath, label: t('highlights.bathrooms'), value: villa.bathrooms },
    {
      icon: CalendarDays,
      label: t('highlights.minStay'),
      value: `${villa.minStay} night`,
    },
  ];

  return (
    <>
      <Seo
        title="Villa Mzungu | Diani Beach Golf Villas 4A"
        description="Stay at Villa Mzungu in Diani Beach, a modern 2-bedroom villa with pool access, kitchen, parking, and flexible short stays."
        canonicalPath="/"
        keywords="Diani Beach villa, Villa Mzungu, Kwale County accommodation, Kenya beach villa, holiday rental Diani"
      />

      <div>
        <section className="relative min-h-[88vh] overflow-hidden bg-slate-950 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={heroImages[currentImage]}
                alt="Villa Mzungu hero"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent" />

          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1 text-sm text-teal-200">
                {t('hero.badge')}
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {t('hero.title')}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                {t('hero.subtitle')}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/booking"
                  className="rounded-full bg-teal-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-teal-300"
                >
                  {t('hero.ctaPrimary')}
                </Link>

                <Link
                  to="/gallery"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t('hero.ctaSecondary')}
                </Link>

                <span className="text-sm text-teal-200">{t('hero.price')}</span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      currentImage === index
                        ? 'w-8 bg-white'
                        : 'w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon className="mb-4 h-6 w-6 text-teal-600" />
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            );
          })}
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{t('section.amenities')}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {villa.amenities.map((amenity) => (
                <div key={amenity} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-teal-600" />
                  <span className="text-sm text-slate-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">{t('section.discover')}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Villa Mzungu is designed for comfort, simplicity, and coastal charm. It works well for couples, small families, and short escapes with a one-night minimum stay.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              The location places guests close to the beauty of Diani Beach, local dining, and the wider experience of Kwale County.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Discover More
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}