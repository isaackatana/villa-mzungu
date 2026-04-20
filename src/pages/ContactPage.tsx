import Seo from '../components/Seo';

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Villa Mzungu"
        description="Get in touch with Villa Mzungu for booking enquiries, directions, and guest support."
        canonicalPath="/contact"
        keywords="contact Villa Mzungu, Diani Beach accommodation contact, Kenya villa enquiry"
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">Contact</h1>
        <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-sm">
          <p className="text-slate-700">Email: hello@villamzungu.com</p>
          <p className="mt-2 text-slate-700">Phone: +254 700 000 000</p>
          <p className="mt-2 text-slate-700">Location: Diani Beach, Kwale County, Kenya</p>
        </div>
      </section>
    </>
  );
}