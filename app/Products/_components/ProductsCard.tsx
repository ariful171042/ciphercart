import Button from '@/components/ui/Button';
import Star from '@/components/ui/Star';
import { productType } from '@/types/productType';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductPageProps {
  product: productType;
}

const ProductsCard: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className='rounded-xl  px-5 py-5 shadow-md '>
      <div className='image h-72 w-full overflow-hidden'>
        <Image
          src={product.images[0]}
          width={500}
          height={500}
          alt={product.title}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='detals flex flex-col gap-3 pt-6'>
        <h4 className='text-xl font-semibold text-primary'>{product.title}</h4>
        <p className='text-md '>{product.desc.substring(20)}...</p>
        <div className='flex'>
          <Star stars={product.star} />
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-xl  font-bold uppercase text-primary'>
            {product.price}
          </span>
          <span className=' text-3xl font-bold text-primary'>
            <FiShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
