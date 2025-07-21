/* Componente per visualizzare immagine e testo */

const ImageWithText = ({ src, alt, text, maxWidth }) => (
  <div className="d-flex flex-column align-items-center" style={{marginTop: '2.5rem', marginBottom: '2.5rem'}}>
    <img 
      src={src}
      alt={alt}
      className="rounded shadow-lg"
      style={{
        maxWidth: maxWidth || '100%',
        width: '100%',
        height: 'auto',
        objectFit: 'cover',
        border: '4px solid var(--primary-red)',
        background: '#fff',
        padding: '8px',
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