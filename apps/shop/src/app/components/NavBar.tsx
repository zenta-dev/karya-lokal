'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const categories = [
    {
        name: 'PAKAIAN',
        subcategories: ['Pakaian Wanita', 'Pakaian Pria', 'Pakaian Anak'],
    },
    {
        name: 'FURNITURE',
        subcategories: ['Tempat Penyimpanan', 'Kursi dan Meja', 'Alat Rumah Tangga'],
    },
    {
        name: 'AKSESORIS',
        subcategories: ['Tas dan Dompet', 'Sandal dan Sepatu', 'Perhiasan'],
    },
    {
        name: 'KECANTIKAN',
        subcategories: ['Perawatan Wajah', 'Perawatan Badan', 'Perawatan Rambut'],
    },
];

const NavBar: React.FC = () => {
    const [visibleDropdown, setVisibleDropdown] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    return (
      <div>
        {/* Mobile NavBar */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
          {mobileMenuOpen && (
            <div className="flex flex-col mt-2">
              {categories.map((category, index) => (
                <div key={category.name} className="relative group mt-2">
                  <Link legacyBehavior href="#">
                    <a>{category.name}</a>
                  </Link>
                  <div className="mt-2">
                    {category.subcategories.map(sub => (
                      <Link legacyBehavior href="#" key={sub}>
                        <a className="block py-2 px-4">{sub}</a>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  
        {/* Desktop NavBar */}
        <div className="hidden lg:block">
          <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-black">
              {categories.map((category, index) => (
                <div key={category.name} className="relative group">
                  <Link legacyBehavior href="#">
                    <a
                      className="navbar__link"
                      onMouseEnter={() => setVisibleDropdown(index)}
                      onMouseLeave={() => setVisibleDropdown(null)}
                    >
                      {category.name}
                    </a>
                  </Link>
                  {visibleDropdown === index && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                      {category.subcategories.map(sub => (
                        <Link legacyBehavior href="#" key={sub}>
                          <a className="block py-2 px-4 hover:bg-gray-100">{sub}</a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NavBar;