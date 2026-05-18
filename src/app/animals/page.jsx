import Image from "next/image";
import animals from "@/data/animals.json";

const AllAnimalsPage = () => {
  return (
    <div className="max-w-3/4 mx-auto px-4 py-10">
      
      <h2 className="text-4xl font-bold text-center mb-10">
        All Animals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >
            
            {/* Image */}
            <div className="relative w-full h-120">

              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
              />

              {/* Featured Badge */}
              {animal.featured && (
                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}

              {/* Collection Badge */}
              {animal.collection && (
                <span className="absolute top-3 right-3 bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Collection
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">
                  {animal.name}
                </h3>

                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                  {animal.category}
                </span>
              </div>

              <p className="text-gray-600">
                Breed: {animal.breed}
              </p>

              <p className="text-gray-600">
                Weight: {animal.weight} KG
              </p>

              <p className="text-gray-600">
                Age: {animal.age} Years
              </p>

              <p className="text-gray-600 line-clamp-1">
                📍 {animal.location}
              </p>

              <p className="text-gray-500 text-sm line-clamp-2">
                {animal.description}
              </p>

              <div className="pt-2 flex items-center justify-between">
                
                <h2 className="text-2xl font-bold text-green-700">
                  ৳ {animal.price.toLocaleString()}
                </h2>

                <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl transition">
                  View Details
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default AllAnimalsPage;