import Link from 'next/link';
import React from 'react'

const NavBar = () => {
    return(
        <div className="Hidden lg:block">
            <div className="container">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blakish">
                    <Link className="navbar__link relative" href="#">
                        PAKAIAN
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        FURNITURE
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        AKSESORIS
                    </Link>
                    <Link className="navbar__link relative" href="#">
                        KECANTIKAN
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;