import * as helmetExports from "react-helmet-async";
// CJS/ESM interop: SSR resolves the CJS build (default export only), the client
// build resolves the ESM build (named exports only).
const helmetResolved = ((helmetExports as unknown as { default?: typeof helmetExports }).default ?? helmetExports) as typeof helmetExports;
const { Helmet } = helmetResolved;

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  structuredData?: object;
}

// Title, description, canonical and social tags are emitted server-side by each
// route's head() (see src/routes/*). This component only injects structured data
// so no duplicate head tags appear after hydration.
const SEO = ({ structuredData }: SEOProps) => {
  if (!structuredData) return null;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};


export default SEO;
