import React, { useState } from 'react';
import { Search } from 'lucide-react';

const DealerFinder = () => {
  const [postalCode, setPostalCode] = useState('');

  const dealers = [
    {
      id: 1,
      name: 'Supercharge Berlin Mitte',
      address: 'Friedrichstraße 123',
      city: 'Berlin',
      postalCode: '10117',
      phone: '+49 30 123456',
      email: 'berlin@supercharge.de',
    },
    {
      id: 2,
      name: 'Supercharge Hamburg Zentrum',
      address: 'Jungfernstieg 45',
      city: 'Hamburg',
      postalCode: '20354',
      phone: '+49 40 654321',
      email: 'hamburg@supercharge.de',
    },
    {
      id: 3,
      name: 'Supercharge München City',
      address: 'Leopoldstraße 89',
      city: 'München',
      postalCode: '80802',
      phone: '+49 89 987654',
      email: 'muenchen@supercharge.de',
    },
    {
      id: 4,
      name: 'Supercharge Köln Zentrum',
      address: 'Hohe Straße 67',
      city: 'Köln',
      postalCode: '50667',
      phone: '+49 221 765432',
      email: 'koeln@supercharge.de',
    },
    {
      id: 5,
      name: 'Supercharge Frankfurt Westend',
      address: 'Mainzer Landstraße 123',
      city: 'Frankfurt am Main',
      postalCode: '60325',
      phone: '+49 69 876543',
      email: 'frankfurt@supercharge.de',
    },
    {
      id: 6,
      name: 'Supercharge Stuttgart Mitte',
      address: 'Königstraße 50',
      city: 'Stuttgart',
      postalCode: '70173',
      phone: '+49 711 234567',
      email: 'stuttgart@supercharge.de',
    },
    {
      id: 7,
      name: 'Supercharge Düsseldorf City',
      address: 'Schadowstraße 20',
      city: 'Düsseldorf',
      postalCode: '40212',
      phone: '+49 211 345678',
      email: 'duesseldorf@supercharge.de',
    },
    {
      id: 8,
      name: 'Supercharge Dortmund Zentrum',
      address: 'Westenhellweg 100',
      city: 'Dortmund',
      postalCode: '44137',
      phone: '+49 231 456789',
      email: 'dortmund@supercharge.de',
    },
    {
      id: 9,
      name: 'Supercharge Essen City',
      address: 'Limbecker Platz 1',
      city: 'Essen',
      postalCode: '45127',
      phone: '+49 201 567890',
      email: 'essen@supercharge.de',
    },
    {
      id: 10,
      name: 'Supercharge Leipzig Mitte',
      address: 'Petersstraße 10',
      city: 'Leipzig',
      postalCode: '04109',
      phone: '+49 341 678901',
      email: 'leipzig@supercharge.de',
    },
    {
      id: 11,
      name: 'Supercharge Bremen Zentrum',
      address: 'Osterstraße 2',
      city: 'Bremen',
      postalCode: '28195',
      phone: '+49 421 789012',
      email: 'bremen@supercharge.de',
    },
    {
      id: 12,
      name: 'Supercharge Dresden Altstadt',
      address: 'Prager Straße 15',
      city: 'Dresden',
      postalCode: '01069',
      phone: '+49 351 890123',
      email: 'dresden@supercharge.de',
    },
    {
      id: 13,
      name: 'Supercharge Hannover Mitte',
      address: 'Georgstraße 22',
      city: 'Hannover',
      postalCode: '30159',
      phone: '+49 511 901234',
      email: 'hannover@supercharge.de',
    },
    {
      id: 14,
      name: 'Supercharge Nürnberg Zentrum',
      address: 'Karolinenstraße 5',
      city: 'Nürnberg',
      postalCode: '90402',
      phone: '+49 911 012345',
      email: 'nuernberg@supercharge.de',
    },
    {
      id: 15,
      name: 'Supercharge Duisburg City',
      address: 'Königstraße 48',
      city: 'Duisburg',
      postalCode: '47051',
      phone: '+49 203 123456',
      email: 'duisburg@supercharge.de',
    },
    {
      id: 16,
      name: 'Supercharge Bochum Zentrum',
      address: 'Kortumstraße 30',
      city: 'Bochum',
      postalCode: '44787',
      phone: '+49 234 234567',
      email: 'bochum@supercharge.de',
    },
    {
      id: 17,
      name: 'Supercharge Wuppertal Elberfeld',
      address: 'Alte Freiheit 9',
      city: 'Wuppertal',
      postalCode: '42103',
      phone: '+49 202 345678',
      email: 'wuppertal@supercharge.de',
    },
    {
      id: 18,
      name: 'Supercharge Bielefeld Mitte',
      address: 'Bahnhofstraße 28',
      city: 'Bielefeld',
      postalCode: '33602',
      phone: '+49 521 456789',
      email: 'bielefeld@supercharge.de',
    },
    {
      id: 19,
      name: 'Supercharge Bonn Zentrum',
      address: 'Sternstraße 12',
      city: 'Bonn',
      postalCode: '53111',
      phone: '+49 228 567890',
      email: 'bonn@supercharge.de',
    },
    {
      id: 20,
      name: 'Supercharge Mannheim City',
      address: 'Planken O7, 18',
      city: 'Mannheim',
      postalCode: '68161',
      phone: '+49 621 678901',
      email: 'mannheim@supercharge.de',
    },
    {
      id: 21,
      name: 'Supercharge Karlsruhe Innenstadt',
      address: 'Kaiserstraße 150',
      city: 'Karlsruhe',
      postalCode: '76133',
      phone: '+49 721 789012',
      email: 'karlsruhe@supercharge.de',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Finden Sie Ihren Supercharge Partner
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Entdecken Sie unsere autorisierten Händler in Ihrer Nähe für eine
            persönliche Beratung und Probefahrt
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Postleitzahl eingeben"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 hover:cursor-not-allowed transition-colors flex items-center gap-2">
              <Search size={20} />
              <span>Suchen</span>
            </button>
          </div>
        </div>

        {/* Dealers List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealers.map((dealer) => (
            <div
              key={dealer.id}
              className="bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {dealer.name}
              </h3>
              <div className="space-y-2 text-slate-600 mb-6">
                <p>{dealer.address}</p>
                <p>
                  {dealer.postalCode} {dealer.city}
                </p>
                <p>{dealer.phone}</p>
                <p>{dealer.email}</p>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 hover:cursor-not-allowed transition-colors">
                  Termin vereinbaren
                </button>
                <button className="flex-1 border border-slate-900 text-slate-900 px-4 py-2 rounded-md hover:bg-slate-100 hover:cursor-not-allowed transition-colors">
                  Route planen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealerFinder;
