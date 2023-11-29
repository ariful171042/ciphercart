import { productType } from '@/types/productType';

interface ProductDetailsSectionProps {
  product: productType;
}

const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({
  product,
}) => {
  return <div>ProductDetailsSection</div>;
};

export default ProductDetailsSection;
