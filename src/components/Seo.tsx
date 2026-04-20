type SeoProps = {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  image?: string;
};

const SITE_NAME = 'Villa Mzungu';
const SITE_URL = 'https://www.villamzungu.com';

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath = '/',
  image = '/og-image.jpg',
}: SeoProps) {
  const canonicalUrl = new URL(canonicalPath, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}