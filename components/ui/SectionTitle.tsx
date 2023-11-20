interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
  return (
    <div className=''>
      <h3 className='text-5xl font-semibold '>{title}</h3>
      <p className='text-lg font-semibold'>{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
