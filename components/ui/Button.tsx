import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'eq disabled:text-dark inline-block whitespace-normal rounded-xl border  px-5 py-2.5 text-center text-lg disabled:cursor-default disabled:border-gray disabled:bg-gray',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white border-gray hover:bg-primary/90 hover:border-gray/90',
        secondary:
          'bg-black text-white border-gray hover:bg-black/90 hover:border-black/90',
        outline:
          'bg-transparent text-black border-black hover:bg-black hover:text-white',
      },
      size: {
        auto: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'auto',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  isLoading,
  children,
  type,
  disabled,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        isLoading && 'flex items-center gap-2.5',
        buttonVariants({ variant, size })
      )}
    >
      {children}
    </button>
  );
};

export default Button;
