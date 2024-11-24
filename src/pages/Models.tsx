import React from 'react';
import { useNavigate } from 'react-router-dom';

const Models = () => {
  const navigate = useNavigate();

  const cars = [
    {
      id: 'compact',
      name: 'Supercharge Compact',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/dolphin/xl/Dolphin-safety-01-xl.jpg',
      specs: [
        'Experience unparalleled efficiency and convenience in every ride!',
        '  ',
        'Top Speed: 160 km/h',
        'Range: 350 km on a single charge',
        'Charging Time: 30 min to 80% (Fast Charge)',
        'Battery Capacity: 40 kWh',
        'Acceleration: 0-100 km/h in 8.5 seconds',
      ],
    },
    {
      id: 'suv',
      name: 'Supercharge SUV',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-performance-01-xl.jpg',
      specs: [
        'Luxury, performance, and space all in one sleek design!',
        '  ',
        'Top Speed: 180 km/h',
        'Range: 450 km on a single charge',
        'Charging Time: 25 min to 80% (Fast Charge)',
        'Battery Capacity: 75 kWh',
        'Acceleration: 0-100 km/h in 6.2 seconds',
      ],
    },
    {
      id: 'sports',
      name: 'Supercharge Sports',
      image: 'https://www.byd.com/content/dam/byd-site/eu/home/kv/banner3-pc-20221102.jpg',
      specs: [
        'Unleash the thrill of speed and sophistication today!',
        '  ',
        'Top Speed: 250 km/h',
        'Range: 500 km on a single charge',
        'Charging Time: 20 min to 80% (Fast Charge)',
        'Battery Capacity: 85 kWh',
        'Acceleration: 0-100 km/h in 3.5 seconds',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-black text-center mb-12">
          Unsere Modelle im Vergleich
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              onClick={() => {
                navigate(`/models/${car.id}`);
                window.scrollTo(0, 0);
              }}
              className="bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-200 transition duration-300"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black mb-4">
                  {car.name}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {car.specs.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Models;
