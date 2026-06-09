'use client';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/footer';

export default function OldSiteFrame({ src }) {
  const isDisclosurePage =
    src ===
    'https://nesco.in/disclosures-under-regulation-46-of-sebi-(lodr)-regulations-2015.php';

  const isStockInfoPage =
    src === 'https://nesco.in/stock-information';

  return (
    <>
      <Navbar activeSlide={1} />

      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 90px)',
          overflow: 'hidden',
          position: 'relative',
          marginTop: '90px',
        }}
      >
        <iframe
          src={src}
          frameBorder="0"
          scrolling="yes"
          style={{
            width: '100%',
            height: isDisclosurePage
              ? 'calc(100% + 250px + 700px)'
              : isStockInfoPage
              ? 'calc(100% + 85px + 600px)' // reduced bottom space
              : 'calc(100% + 85px + 790px)',
            marginTop: isDisclosurePage ? '-150px' : '-85px',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      <Footer />
    </>
  );
}