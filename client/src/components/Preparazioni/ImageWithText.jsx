/* Componente per visualizzare immagine e testo */

const ImageWithText = ({ src, alt, text, maxWidth }) => (
  <div className="d-flex flex-column align-items-center" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
    <img 
      src={src}
      alt={alt}
      style={{
        maxWidth: maxWidth || '100%',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        marginBottom: '32px',
        marginTop: '8px'
      }}
    />
    <div className="text-justify w-100">
      <p>{text}</p>
    </div>
  </div>
);

export default ImageWithText;