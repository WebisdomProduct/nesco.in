'use client';

import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/footer';

export default function OldSiteFrame({ src }) {
  return (
    <>
      <Navbar activeSlide={1} />
      <div style={{
        width: '100%',
        height: 'calc(100vh - 90px)', // keep consistent container height
        overflow: 'hidden',
        position: 'relative',
        marginTop: '90px', // Standard fixed navbar space
      }}>
        <iframe
          src={src}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          frameBorder="0"
          scrolling="yes"
          style={{
            width: '100%',
            height: src === 'https://nesco.in/disclosures-under-regulation-46-of-sebi-(lodr)-regulations-2015.php'
              ? 'calc(100% + 250px + 700px)' // clip 250px top + 800px bottom
              : 'calc(100% + 85px + 790px)', // clip 85px top + 800px bottom
            marginTop: src === 'https://nesco.in/disclosures-under-regulation-46-of-sebi-(lodr)-regulations-2015.php'
              ? '-150px' // hide both main and secondary header
              : '-85px', // hide main header
            border: 'none',
            display: 'block'
          }}
        />
      </div>
      <Footer />
    </>
  );
}
