export const metadata = {
  title: 'Cyborg IT Technology',
  description: 'High-quality IT solutions, consulting, and web development services.'
}

export default function LangLayout({ children, params }) {
  return (
    <>
      {/* Language-specific content wrapper */}
      <div lang={params.lang} id={`lang-${params.lang}`}>
        {children}
      </div>
    </>
  );
}
