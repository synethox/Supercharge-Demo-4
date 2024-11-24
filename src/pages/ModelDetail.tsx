import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ModelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cars = {
    compact: {
      name: 'Supercharge Compact',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/dolphin/xl/Dolphin-safety-01-xl.jpg',
      description:
        'Der perfekte Begleiter für die Stadt, der Effizienz mit Stil verbindet. Der Supercharge Compact wurde für urbane Abenteuer entwickelt und bietet wendiges Handling und intelligente Funktionen, die jede Fahrt zum Vergnügen machen.',
      specs: {
        performance: {
          acceleration: '0-100 km/h in 8,5 Sekunden',
          topSpeed: '160 km/h',
          range: '350 km',
          power: '150 kW',
        },
        battery: {
          capacity: '40 kWh',
          chargingTime: '30 min (Schnellladung bis 80%)',
          type: 'Lithium-Ionen',
        },
        dimensions: {
          length: '4,2 m',
          width: '1,8 m',
          height: '1,5 m',
          weight: '1.500 kg',
        },
      },
      featureDescription: `Der Supercharge Compact vereint modernste Technologie mit urbanem Lifestyle. Das fortschrittliche Fahrerassistenzsystem macht jede Fahrt sicher und entspannt, während die intelligente Klimaanlage für optimalen Komfort sorgt. Das innovative 360° Kamerasystem bietet perfekte Übersicht in jeder Situation, ergänzt durch kabelloses Laden für maximale Konnektivität. Das Premium Soundsystem verwandelt jede Fahrt in ein akustisches Erlebnis der Extraklasse.

      Die durchdachte Integration dieser Technologien macht den Compact zu einem wahren Technologie-Vorreiter seiner Klasse. Besonders beeindruckend ist die nahtlose Verbindung von Effizienz und Komfort, die sich in jedem Detail widerspiegelt. Von der reaktionsschnellen Steuerung bis zur intuitiven Bedienung - der Compact setzt neue Maßstäbe im Segment der kompakten Elektrofahrzeuge.`,
      price: '35.900',
    },
    suv: {
      name: 'Supercharge SUV',
      image: 'https://www.byd.com/content/dam/byd-site/eu/electric-cars/sealion-7/xl/byd-sealion-7-performance-01-xl.jpg',
      description:
        'Vielseitigkeit trifft auf Luxus in unserem Premium-Elektro-SUV. Perfekt für Familien und Abenteurer, bietet uneingeschränkten Komfort und Leistungsfähigkeit für jede Reise.',
      specs: {
        performance: {
          acceleration: '0-100 km/h in 6,2 Sekunden',
          topSpeed: '180 km/h',
          range: '450 km',
          power: '225 kW',
        },
        battery: {
          capacity: '75 kWh',
          chargingTime: '25 min (Schnellladung bis 80%)',
          type: 'Advanced Lithium-Ionen',
        },
        dimensions: {
          length: '4,8 m',
          width: '1,9 m',
          height: '1,7 m',
          weight: '2.100 kg',
        },
      },
      featureDescription: `Der Supercharge SUV definiert Luxus und Vielseitigkeit neu. Die adaptive Luftfederung passt sich kontinuierlich den Straßenverhältnissen an und garantiert höchsten Fahrkomfort. Das großzügige Panorama-Glasdach schafft ein einzigartiges Raumgefühl und lässt natürliches Licht den premium-ausgestatteten Innenraum durchfluten.

      Der erweiterte Autopilot macht selbst lange Fahrten zum entspannten Vergnügen, während die integrierte Anhängerkupplung maximale Flexibilität für alle Transportaufgaben bietet. Das Premium Interieur-Paket verwöhnt mit erlesenen Materialien und durchdachter Ergonomie. Jedes Detail wurde sorgfältig ausgewählt, um ein Fahrerlebnis der Extraklasse zu schaffen.`,
      price: '55.900',
    },
    sports: {
      name: 'Supercharge Sports',
      image: 'https://www.byd.com/content/dam/byd-site/eu/home/kv/banner3-pc-20221102.jpg',
      description:
        'Erleben Sie pure elektrische Performance. Der Supercharge Sports verbindet atemberaubende Beschleunigung mit raffiniertem Design und setzt neue Maßstäbe im Segment der elektrischen Sportwagen.',
      specs: {
        performance: {
          acceleration: '0-100 km/h in 3,5 Sekunden',
          topSpeed: '250 km/h',
          range: '500 km',
          power: '400 kW',
        },
        battery: {
          capacity: '85 kWh',
          chargingTime: '20 min (Schnellladung bis 80%)',
          type: 'Performance Lithium-Ionen',
        },
        dimensions: {
          length: '4,6 m',
          width: '1,9 m',
          height: '1,3 m',
          weight: '1.800 kg',
        },
      },
      featureDescription: `Der Supercharge Sports verkörpert die perfekte Symbiose aus Hochleistungstechnologie und nachhaltigem Antrieb. Der exklusive Sport Mode Plus erschließt das volle Potenzial der elektrischen Antriebseinheit, während das Carbon-Paket nicht nur das Gewicht optimiert, sondern auch die athletische Ästhetik unterstreicht.

      Die Performance-Bremsen bieten kompromisslose Verzögerung und Kontrolle, perfekt abgestimmt auf die immense Leistung. Die aktive Aerodynamik passt sich automatisch den Fahrbedingungen an und optimiert sowohl Effizienz als auch Stabilität. Die innovative Rennstrecken-Telemetrie liefert präzise Daten für das ultimative Sportwagenerlebnis und macht jeden Track Day zu einem datengestützten Performance-Event.`,
      price: '89.900',
    },
  };

  const car = cars[id];

  if (!car) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Modell nicht gefunden
          </h1>
          <button
            onClick={() => navigate('/models')}
            className="bg-slate-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-slate-800 transition"
          >
            Zurück zur Übersicht
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16 rounded-lg overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {car.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">{car.description}</p>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Performance</h2>
            <ul className="space-y-2 text-slate-600">
              {Object.entries(car.specs.performance).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="capitalize">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Batterie</h2>
            <ul className="space-y-2 text-slate-600">
              {Object.entries(car.specs.battery).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="capitalize">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Dimensionen
            </h2>
            <ul className="space-y-2 text-slate-600">
              {Object.entries(car.specs.dimensions).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="capitalize">{key}:</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature Description */}
        <div className="bg-slate-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ausstattung & Technologie</h2>
          <div className="text-slate-600 space-y-4 leading-relaxed">
            {car.featureDescription.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900 mb-6">
            Ab €{car.price}
          </p>
          <button
            onClick={() => {
              navigate('/dealer-finder');
              window.scrollTo(0, 0);}
            }
            className="bg-slate-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-800 transition"
          >
            Händler finden
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;