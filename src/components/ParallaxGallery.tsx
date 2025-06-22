import React, { useEffect, useRef } from 'react';

const ParallaxGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const images = [
    // First row images
    [
      "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ],
    // Second row images
    [
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1624509/pexels-photo-1624509.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1624511/pexels-photo-1624511.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/1624513/pexels-photo-1624513.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    ]
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!galleryRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = galleryRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when gallery is in view
      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      // Apply transforms based on scroll progress
      const maxTransform = 200; // Maximum pixels to move
      
      // First row moves left to right (positive transform)
      const row1Transform = (scrollProgress - 0.5) * maxTransform;
      row1Ref.current.style.transform = `translateX(${row1Transform}px)`;
      
      // Second row moves right to left (negative transform)
      const row2Transform = -(scrollProgress - 0.5) * maxTransform;
      row2Ref.current.style.transform = `translateX(${row2Transform}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={galleryRef} className="py-32 overflow-hidden relative">
      <div className="space-y-8 relative z-10">
        {/* First Row - Moves Left to Right */}
        <div ref={row1Ref} className="flex space-x-8 transition-transform duration-75 ease-out">
          {images[0].map((src, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
              />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling effect */}
          {images[0].map((src, index) => (
            <div
              key={`row1-dup-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moves Right to Left */}
        <div ref={row2Ref} className="flex space-x-8 transition-transform duration-75 ease-out">
          {images[1].map((src, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 6}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
              />
            </div>
          ))}
          {/* Duplicate images for seamless scrolling effect */}
          {images[1].map((src, index) => (
            <div
              key={`row2-dup-${index}`}
              className="flex-shrink-0 w-96 h-64 rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
            >
              <img
                src={src}
                alt={`Cosmic scene ${index + 6}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;