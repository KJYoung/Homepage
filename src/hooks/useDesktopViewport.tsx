import { useEffect } from "react";

export function useDesktopViewport(width = 1280) {
  useEffect(() => {
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'viewport';
      document.head.appendChild(meta);
    }
    const prev = meta.getAttribute('content') || '';
    const scale = Math.max(0.1, Math.min(5, window.innerWidth / width));
    meta.setAttribute('content', `width=${width}, initial-scale=${scale}`);
    return () => meta!.setAttribute('content', prev);
  }, [width]);
}