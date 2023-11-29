import ProductDetailsSection from './_components/ProductDetailsSection';
import ProductImageSection from './_components/ProductImageSection';

const data = {
  id: '2',
  title: 'Smart LED Bulb',
  desc: 'Energy-efficient smart LED bulb with color-changing capabilities.',
  price: '$12.99',
  category: 'Electricals',
  qty: 50,
  star: 4,
  images: [
    'https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ],
};

const ProductsDetalsPage = ({ params }: { params: { id: string } }) => {
  return (
    <section className='sp container grid max-h-screen grid-cols-1 md:grid-cols-2'>
      <ProductImageSection product={data} />
      <ProductDetailsSection product={data} />
    </section>
  );
};

export default ProductsDetalsPage;
