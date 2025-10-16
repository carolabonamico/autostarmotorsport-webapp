import '../../styles/components/Utilities.css';

const ImageWithText = ({ src, alt, text, maxWidth }) => (
  <div className="image-with-text-component d-flex flex-column align-items-start">
    <img 
      src={src}
      alt={alt}
      style={{ maxWidth: maxWidth || '100%' }}
    />
    <div className="text-content">
      <p>{text}</p>
    </div>
  </div>
);

export default ImageWithText;