'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxContextType {
  openLightbox: (src: string, alt?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType>({
  openLightbox: () => {},
  closeLightbox: () => {},
});

export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [activeImage, setActiveImage] = useState<{ src: string; alt?: string } | null>(null);

  const openLightbox = (src: string, alt?: string) => {
    setActiveImage({ src, alt });
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      {/* Global Lightbox Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
            aria-label="Close Lightbox"
          >
            <X size={22} />
          </button>

          {/* Modal Content Box */}
          <div
            className="relative max-w-6xl max-h-[92vh] w-auto h-auto flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900">
              <img
                src={activeImage.src}
                alt={activeImage.alt || 'Screenshot preview'}
                className="max-h-[82vh] max-w-[90vw] w-auto h-auto object-contain rounded-2xl"
              />
            </div>
            {activeImage.alt && (
              <div className="mt-3 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-white/90 text-xs font-medium tracking-wide">
                {activeImage.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

interface ZoomableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  containerClassName?: string;
}

export function ZoomableImage({ src, alt, className = '', containerClassName = '', ...props }: ZoomableImageProps) {
  const { openLightbox } = useLightbox();

  return (
    <div
      onClick={() => openLightbox(src, alt)}
      className={`relative group cursor-zoom-in overflow-hidden ${containerClassName}`}
      title="Click to view full image"
    >
      <img src={src} alt={alt} className={`transition-transform duration-300 group-hover:scale-[1.02] ${className}`} {...props} />
      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
        <div className="p-2 rounded-full bg-white/90 text-slate-900 shadow-md backdrop-blur-xs transform scale-90 group-hover:scale-100 transition-transform">
          <ZoomIn size={16} />
        </div>
      </div>
    </div>
  );
}
