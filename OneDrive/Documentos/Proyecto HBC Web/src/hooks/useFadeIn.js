import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useFadeIn = () => {
  const location = useLocation();
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    setFadeKey(prevKey => prevKey + 1);
  }, [location.key]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [fadeKey]); 
};

export default useFadeIn;
