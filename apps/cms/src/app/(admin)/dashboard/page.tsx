import AddProduct from "@/components/products/AddProduct";
import ProductList from "@/components/products/ProductList";

const DashboardPage = () => {
  return (
    <div>
      <ProductList />
      <AddProduct />
    </div>
  );
};
export default DashboardPage;
