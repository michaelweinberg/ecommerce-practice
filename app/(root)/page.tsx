import ProductList from "@/components/shared/header/product/product-list";
// import { Button } from "@/components/ui/button";
import sampleData from '@/db/sample-data'


export const metadata = {
  title: 'Home'
}

const Homepage = () => {
  console.log('sample data', sampleData.products);
  return ( 
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" />
    </>
  );
}
 
export default Homepage;