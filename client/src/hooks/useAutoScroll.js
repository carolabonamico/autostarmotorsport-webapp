import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useAutoScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll con offset navbar se presente un hash
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 80;
        const top = el.offsetTop - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }
    }
    // Default: scroll top semplice (senza delay inutile)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);
};

export default useAutoScroll;
