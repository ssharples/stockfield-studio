import { equipmentList } from '../../data/equipment';

export default function Equipment() {
  return (
    <section className="py-16 bg-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Studio Equipment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentList.map((item, index) => (
            <div key={index} className="bg-dark-800 rounded-lg p-6">
              <div className="aspect-square bg-dark-700 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
