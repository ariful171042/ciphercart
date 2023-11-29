import SectionTitle from '@/components/ui/SectionTitle';
import { products } from '@/data/products';
import ProductsCard from './ProductsCard';
import { productType } from '@/types/productType';

const Products = () => {
  return (
    <section className='sp container'>
      <SectionTitle
        title='Products'
        subTitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nisi.'
      />
      <div className='sp grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {products &&
          products.map((product: productType) => (
            <ProductsCard key={product.title} product={product} />
          ))}
      </div>
    </section>
  );
};

export default Products;
