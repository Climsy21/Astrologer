import React from 'react';

const ScrollingText = () => {
  const scrollingText = "Celestial Guide * Zodiac Wisdom * Astro Forecast * ";

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="relative z-10">
        {/* Scrolling Text Marquee */}
        <div className="relative mb-16">
          <div className="flex whitespace-nowrap animate-scroll">
            <div className="flex items-center text-6xl md:text-8xl font-bold text-white/80 drop-shadow-2xl">
              {/* Repeat the text multiple times for seamless scrolling */}
              {Array.from({ length: 20 }).map((_, index) => (
                <span key={index} className="mr-8">
                  {scrollingText}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;