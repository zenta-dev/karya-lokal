import Header from "@/components/globals/Header";
import ProductHero from "@/components/products/ProductHero";
import getAllProduct, { getHighSellProduct } from "@/lib/products";

export default async function Home() {
  const productsData: Promise<Product[]> = getAllProduct();
  const products = await productsData;
  const productHeroData: Promise<Product[]> = getHighSellProduct();
  const productHero = await productHeroData;

  return (
    <div className="mx-4">
      <Header />
      <ProductHero products={productHero} />
    </div>
  );
}
