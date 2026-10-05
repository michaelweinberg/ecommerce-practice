import ProductList from "@/components/shared/header/product/product-list";
// import { Button } from "@/components/ui/button";
import { getLatestProducts } from "@/lib/actions/product.actions";


export const metadata = {
  title: 'Home'
}

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return ( 
    <>
      <ProductList 
        data={latestProducts} 
        title="Newest Arrivals" />
    </>
  );
}
 
export default Homepage;