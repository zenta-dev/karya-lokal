'use client';

import React, { useState, useEffect } from 'react';

interface PropsType {
  title: string;
  mainTitle: string;
  desc: string;
}

const AboutUs: React.FC<PropsType> = ({ title, mainTitle, desc }) => {
  const [cornerRadius, setCornerRadius] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cornerRadius < 100) {
        setCornerRadius(cornerRadius + 1);
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [cornerRadius]);

  const renderWebsiteCreators = () => {
    const creators = [
      "Violia Ruana Nur'aini Sagita    (21051204004)",
      "Nanggala Jalasena Pramana Putra (21051204006)",
      "Rahmat hidayatullah             (21051204020)",
      "Iffo Elsande Pratama Putra      (21051204064)",
      "Ghaly Shaflyyus Tsaqif          (21051204069)",
      "Bennett Ibrahim Basvira         (21051204072)",
      "Herman Wordaun Rainhart Rumy    (21051204076)",
    ];

    return (
      <ol className="text-left">
        {creators.map((creator, index) => (
          <li key={index}>
            <a>{index + 1}. {creator}</a>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="pb-10 pt-16 flex flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="font-medium text-3xl pb-10">Jelajahi KaryaLokal</h2>
      </div>
      <div className="bg-[#DBEAFE] p-10 relative rounded-3xl text-white text-center">
        <div className="bg-white p-10 relative rounded-3xl text-black text-center">
          <div className="bg-[#566BA7] p-4 rounded-lg text-white text-center mb-5">
            <h2 className="text-xl font-semibold">Tentang KaryaLokal</h2>
          </div>
          <h1>
            KaryaLokal adalah platform e-commerce yang mempromosikan dan mendukung produk-produk lokal Indonesia dengan fokus pada keberlanjutan dan kearifan lokal. Mereka menawarkan beragam barang dari kecantikan, furniture, aksesoris, hingga produk fashion, membantu meningkatkan ekonomi lokal dan melestarikan budaya. Dengan berbelanja di KaryaLokal, pelanggan mendukung bisnis lokal dan warisan budaya Indonesia. Platform ini merupakan tempat ideal untuk mengeksplorasi dan mendukung produk lokal berkualitas.
          </h1>
          <div className="bg-[#566BA7] p-4 rounded-lg text-white text-center mb-5 mt-5">
            <h2 className="text-xl font-semibold">Pembuat Website</h2>
          </div>
          {renderWebsiteCreators()}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

