import Star from '@/components/ui/Star';
import { productType } from '@/types/productType';

interface ProductDetailsSectionProps {
  product: productType;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return (
    <div>
      <div className='p-5'>
        <h3>{product.title}</h3>
        <Star stars={product.star} />
        <p>{product.desc}</p>
        <span>{product.category}</span>
        <p>{product.price}</p>
        <p>{product.qty}</p>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
