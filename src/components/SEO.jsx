import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path = '', image = '' }) {
  const siteName = 'Yashvi Nexus';
  const siteUrl = 'https://yashvinexus.com';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
