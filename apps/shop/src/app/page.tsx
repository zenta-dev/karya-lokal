import BestSeller from "./components/homrpage/BestSeller";
import Hero from "./components/homrpage/Hero";
import Products from "./components/homrpage/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSeller />
      <Products />
    </main>
  );
}
