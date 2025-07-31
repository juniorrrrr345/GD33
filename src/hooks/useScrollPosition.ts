import { useEffect } from 'react';

export function useScrollPosition(key: string = 'scrollPosition') {
  // Sauvegarder la position de défilement
  const saveScrollPosition = () => {
    const scrollPosition = window.scrollY;
    sessionStorage.setItem(key, scrollPosition.toString());
  };

  // Restaurer la position de défilement
  const restoreScrollPosition = () => {
    const savedPosition = sessionStorage.getItem(key);
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(savedPosition),
          behavior: 'instant'
        });
      }, 100);
    }
  };

  // Nettoyer la position sauvegardée
  const clearScrollPosition = () => {
    sessionStorage.removeItem(key);
  };

  // Restaurer automatiquement au montage du composant
  useEffect(() => {
    restoreScrollPosition();
  }, []);

  return {
    saveScrollPosition,
    restoreScrollPosition,
    clearScrollPosition
  };
}