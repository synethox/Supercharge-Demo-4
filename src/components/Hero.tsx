import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const Hero = () => {
  const scrollToEndOfElement = () => {
    const element = document.getElementById('hero-end');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThirdElement = () => {
    const hero = document.getElementById('features-end');
    const features = document.getElementById('features-end');
    if (hero && features) {
      const scrollToPosition = features.offsetTop;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="hero" className="relative h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://t4.ftcdn.net/jpg/06/31/31/37/360_F_631313702_frWxRE0tTxJxQHoMyQV0cXVTpi0r2kMq.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Supercharge
            <span className="block text-2xl md:text-4xl mt-2">
              your everyday life
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
            Entdecken Sie nachhaltige Energielösungen für Ihr Zuhause. Von
            Solarpanelen bis zu Elektrofahrzeugen - alles für eine grünere
            Zukunft.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex gap-4 bg-white/10 backdrop-blur-md rounded-lg p-2">
              <input
                type="text"
                placeholder="Suchen Sie nach Modellen, Technologien oder Händlern..."
                className="flex-1 bg-transparent border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-slate-900 px-6 py-2 rounded-lg hover:bg-gray-100 hover:cursor-not-allowed transition-colors flex items-center gap-2">
                <Search size={20} />
                <span>Suchen</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={scrollToEndOfElement}
              className="bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Produkte entdecken
            </button>
            <button
              onClick={scrollToThirdElement}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>

      <div
        onClick={scrollToEndOfElement}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="text-white" size={32} />
      </div>

      <div id="hero-end" className="h-[10vh]"></div>
      <div id="features-end" className="h-[10vh]"></div>
    </div>
  );
};

export default Hero;