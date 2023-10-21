'use client';

import BestSeller from "./components/BestSeller";
import Hero from "./components/Hero";
import Products from "./components/Products";

export default function Home(){
  return(
    <main>
      <Hero/>
      <BestSeller/>
      <Products/>
    </main>
  );
}