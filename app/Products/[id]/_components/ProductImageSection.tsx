'use client';
import { productType } from '@/types/productType';
import Image from 'next/image';

interface ProductDetailsSectionProps {
  product: productType;
}

const ProductImageSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <section>
      <div className='flex h-full flex-col   gap-2.5 p-5'>
        <div className='h-[45%] w-full overflow-hidden'>
          <Image
            src={product.images[0]}
            alt='image'
            width={500}
            height={500}
            priority
            className='h-full w-full object-cover'
          />
        </div>
        <div className=' grid grid-cols-3 gap-2.5 '>
          {product.images.map((img, i) => (
            <div className=' h-[200px] overflow-hidden ' key={i}>
              <Image
                src={img}
                alt='img'
                width={500}
                height={50}
                className='object-contain '
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductImageSection;
