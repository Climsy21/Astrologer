import React from 'react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Summer Solstice Abundance",
      date: "June 21, 2025",
      description: "The Summer Solstice brings abundance. Embrace new beginnings with open arms.",
      image: "https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Venus in Leo",
      date: "June 15, 2025",
      description: "Venus enters Leo, igniting passion. Relationships deepen, creativity soars for many.",
      image: "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Mercury in Gemini",
      date: "June 8, 2025",
      description: "Mercury in Gemini enhances communication. Share your thoughts, connect with others now.",
      image: "https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Jupiter Direct",
      date: "June 1, 2025",
      description: "Jupiter stations direct in Sagittarius. Expand your horizons, seek adventure today.",
      image: "https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16 drop-shadow-xl">
          Latest Astro News
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-white/60 text-sm mb-4">{item.date}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">{item.description}</p>
                  <button className="bg-white/15 hover:bg-white/25 text-white px-6 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur-sm border border-white/20 shadow-lg">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;