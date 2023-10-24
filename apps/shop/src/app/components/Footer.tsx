import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // Import the email and phone icons

const Footer = () => {
  return (
    <div className="bg-[#1E3A8A] text-white text-center py-4 md:py-8">
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-48">
        <div className="text-left mb-4 md:mb-0 md:mr-4">
          <h3 className="text-lg font-semibold">Jelajahi KaryaLokal :</h3>
          <p>Tentang Kami</p>
        </div>

        <div className="text-left mb-4 md:mb-0 md:mx-4">
          <h3 className="text-lg font-semibold">Kategori Populer :</h3>
          <p>Pakaian</p>
          <p>Aksesoris</p>
          <p>Kecantikan</p>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold">Masih Bingung dan Memiliki Pertanyaan?</h3>
          <div className="flex flex-col items-start">
            <p>
              <AiOutlineMail className="inline text-white mr-2" /> cs@karyalokal.id
            </p>
            <p>
              <AiOutlinePhone className="inline text-white mr-2" /> 085234258863
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
