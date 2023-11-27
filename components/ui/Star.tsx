import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa';
interface StarProps {
  stars: number;
}

const Star: React.FC<StarProps> = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className=''>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return <div className='flex gap-1 text-xl text-orange-400'>{ratingStar}</div>;
};

export default Star;
