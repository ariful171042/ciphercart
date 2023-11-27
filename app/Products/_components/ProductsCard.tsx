import Button from '@/components/ui/Button';
import Star from '@/components/ui/Star';
import { productType } from '@/types/productType';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';

interface ProductPageProps {
  product: productType;
}

const ProductsCard: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className='rounded-xl  px-5 py-5 shadow-md '>
      <div className='image relative h-72 w-full overflow-hidden'>
        <Image
          src={product.images[0]}
          width={500}
          height={500}
          alt={product.title}
          className='h-full w-full object-cover'
        />
        <div className='icons absolute bottom-3 right-3 z-10 flex flex-col items-center gap-3'>
          <div className='  rounded-full bg-primary p-2 text-xl  font-bold text-white shadow-xl'>
            <FiShoppingCart />
          </div>
          <span className=' rounded-full bg-primary p-2 text-xl  font-bold text-white shadow-xl'>
            <MdFavoriteBorder />
          </span>
        </div>
      </div>
      <div className='detals flex flex-col items-center justify-center gap-2 pt-3'>
        <span className='text-2xl  font-bold uppercase text-primary'>
          {product.price}
        </span>
        <Star stars={product.star} />
        <h4 className='text-2xl font-semibold text-primary'>{product.title}</h4>
        <p className='text-center text-xl'>{product.desc.substring(20)}...</p>
      </div>
    </div>
  );
};

export default ProductsCard;
