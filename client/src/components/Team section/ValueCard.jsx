import '../../styles/components/Cards.css';

const ValueCard = ({ title, description, alignment = 'left', delay = 0 }) => {
  const isLeft = alignment === 'left';
  
  return (
    <div 
      className={`d-flex align-items-center mb-5 ${!isLeft ? 'flex-row-reverse' : ''}`}
      data-aos={isLeft ? 'fade-right' : 'fade-left'}
      data-aos-delay={delay}
    >
      <div className={`flex-grow-1 ${isLeft ? 'pe-lg-5' : 'ps-lg-5'}`}>
        <div className={`value-box ${isLeft ? 'value-box-left' : 'value-box-right'}`}>
            <div className={`value-text ${isLeft ? 'ps-5' : 'pe-5 text-end'}`}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
