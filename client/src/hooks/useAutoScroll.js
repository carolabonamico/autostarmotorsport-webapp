import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAutoScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Aspetta che la pagina sia completamente renderizzata
    const timer = setTimeout(() => {
      // Se c'è un hash nell'URL (come #radici), gestiscilo con compensazione navbar
      if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          const navbarHeight = 80; // Altezza della navbar fissa
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          return;
        }
      }

      // Per tutte le altre navigazioni verso pagine diverse dalla home, 
      // controlla se c'è un hash specifico o se è una navigazione normale
      if (location.pathname !== '/') {
        // Se non c'è hash, mostra l'hero completo (scroll a inizio pagina)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Per la home, scrolla all'inizio
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 300); // Aumenta il delay per dare tempo al rendering

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);
};

export default useAutoScroll;
