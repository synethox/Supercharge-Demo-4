import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mobility = () => {
  const navigate = useNavigate();

  const handleExploreModels = () => {
    navigate('/models');
    window.scrollTo(0, 0);
  };

  const cars = [
    {
      id: 'compact',
      name: 'Supercharge Compact',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/dolphin/xl/Dolphin-safety-01-xl.jpg',
      description: 'Perfekt für die Stadt',
    },
    {
      id: 'suv',
      name: 'Supercharge SUV',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-performance-01-xl.jpg',
      description: 'Vielseitig und bereit für unwegsames Gelände',
    },
    {
      id: 'sports',
      name: 'Supercharge Sports',
      image: 'https://www.byd.com/content/dam/byd-site/eu/home/kv/banner3-pc-20221102.jpg',
      description: 'Reine Begeisterung - schlank, kraftvoll und bereit für Sport-Enthusiasten',
    },
  ];

  return (
    <div className="relative bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/sealion-7-kv-pc.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-900/30"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Willkommen in der Zukunft der Mobilität
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Wo Innovation auf Zugänglichkeit trifft
          </p>
          <button
            onClick={handleExploreModels}
            className="bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Modelle entdecken
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Unsere Modelle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div
                key={car.id}
                onClick={() => {
                  navigate(`/models/${car.id}`);
                  window.scrollTo(0, 0);
                }}
                className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {car.name}
                  </h3>
                  <p className="text-gray-700">{car.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Adversary Text Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Gemeinsam revolutionieren wir die Elektromobilität
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bei uns steht Innovation im Mittelpunkt. Unsere Vision ist es, die Art und Weise,
            wie wir Mobilität erleben, zu verändern. Mit erstklassigen Designs, bahnbrechender
            Technologie und einem unermüdlichen Engagement für Nachhaltigkeit schaffen wir
            Fahrzeuge, die nicht nur leistungsstark, sondern auch umweltfreundlich sind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mobility;
