import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Crystal Kizor";
const SITE_URL = "https://your-domain.com";
const SOCIAL_IMAGE = "https://res.cloudinary.com/greyhairedgallery/image/upload/v1791559755/Crystal_Architectural_Designer_in_Her_Studio_2_ffk0cn.png";

export default function PageMeta({
  title,
  description = "Explore the work, ideas, and initiatives of Crystal Kizor — architect, designer, entrepreneur, speaker, researcher, and creator.",
  path,
  ogTitle,
  ogDescription,
}) {
  const router = useRouter();

  const pagePath =
    path || router.asPath?.split(/[?#]/)[0] || "/";

  const canonicalUrl = `${SITE_URL}${
    pagePath === "/" ? "" : pagePath.startsWith("/") ? pagePath : `/${pagePath}`
  }`;

  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : "Crystal Kizor | Architecture, Design, Ideas & Impact";

  const socialTitle = ogTitle || fullTitle;
  const socialDescription = ogDescription || description;

  return (
    <Head>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — Facebook, LinkedIn, WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={SOCIAL_IMAGE} />
      <meta property="og:image:alt" content="Crystal Kizor — architect, designer, and creator" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={SOCIAL_IMAGE} />
      <meta name="twitter:image:alt" content="Crystal Kizor — architect, designer, and creator" />
    </Head>
  );
}