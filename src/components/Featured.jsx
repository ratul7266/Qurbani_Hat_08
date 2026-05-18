import Image from "next/image";
import FeaturedAnimal from "../data/animals.json";
import Link from "next/link";

const Featured = () => {
  const featuredAnimals = FeaturedAnimal.filter(
    (animal) => animal.featured === true,
  );

  return (
    <section className="px-4 py-12 font-sans">
      {/* Header */}
      <div className="mb-10 flex items-end gap-4">
        <div>
          <h2 className="text-4xl font-bold text-center mb-2 border-b-2 border-b-green-800 pb-2 inline-block">
            Featured Animals
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            {featuredAnimals.length} animals available
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-11/12 mx-auto">
        {featuredAnimals.map((animal) => (
          <div
            key={animal.id}
            className="max-w-11/12 mx-auto group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
          >
            {/* Image */}
            <div className="relative h-48 image-full overflow-hidden bg-gray-100">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-fill transition-transform duration-300 group-hover:scale-105"
              />
              {/* Featured badge */}
              <span className="absolute left-3 top-3 rounded bg-green-800 px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-green-200">
                Featured
              </span>
              {/* Price tag */}
              <span className="absolute bottom-3 right-3 rounded border border-gray-200 bg-white px-2.5 py-1 text-xs font-semibold text-gray-800">
                {animal.price.toLocaleString("bn-BD", {
                  style: "currency",
                  currency: "BDT",
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {animal.breed}
              </p>
              <h3 className="font-serif text-xl font-semibold text-gray-900">
                {animal.name}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-gray-500">
                {animal.description}
              </p>

              {/* Footer */}
              <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {animal.location}
                </span>
                <button className="rounded-lg border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 active:scale-95">
                  <Link href={`/animals/${animal.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;