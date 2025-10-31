import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalReach = () => {
  const regions = [
    {
      region: 'Africa',
      countries: ['Nigeria', 'Kenya', 'Ghana', 'Uganda', 'Tanzania'],
      missionaries: 12,
      churches: 45,
    },
    {
      region: 'Asia',
      countries: ['India', 'Philippines', 'Indonesia'],
      missionaries: 8,
      churches: 28,
    },
    {
      region: 'South America',
      countries: ['Brazil', 'Peru', 'Colombia'],
      missionaries: 5,
      churches: 15,
    },
    {
      region: 'Caribbean',
      countries: ['Haiti', 'Jamaica', 'Dominican Republic'],
      missionaries: 6,
      churches: 18,
    },
  ];

  return (
    <div className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Global Reach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spreading the Gospel across continents and cultures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{region.region}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Countries:</div>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white px-2 py-1 rounded-full text-gray-700"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-black">
                      {region.missionaries}
                    </div>
                    <div className="text-xs text-gray-600">Missionaries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-black">
                      {region.churches}
                    </div>
                    <div className="text-xs text-gray-600">Churches</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalReach;