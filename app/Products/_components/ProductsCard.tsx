import Button from '@/components/ui/Button';
import { productType } from '@/types/productType';
import Image from 'next/image';

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
        <div className='flex justify-between'>
          <span className='text-md  text-gray-400 font-bold uppercase'>
            {product.category}
          </span>
          <span className=' text-xl font-bold text-primary'>
            {product.price}
          </span>
        </div>

        <h4 className='text-xl font-semibold text-primary'>{product.title}</h4>
        <p className='text-md '>{product.desc.substring(20)}...</p>
        <Button>Shop Now</Button>
      </div>
    </div>
  );
};

export default ProductsCard;
