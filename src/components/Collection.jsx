"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import CollectionData from "../data/animals.json";
import Link from "next/link";

const Collection = () => {
  const CategoryAnimals = CollectionData.filter(
    (animal) => animal.collection === true,
  );
  return (
    <div className="py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 border-b-2 border-b-green-800 pb-2 inline-block">
        Collection Category
      </h2>
      <Marquee pauseOnHover={true} gradient={false} speed={50}>
        <div className="flex gap-6">
          {CategoryAnimals.map((animal) => (
            <div
              key={animal.id}
              className="card bg-base-100 min-w-65 md:min-w-70 lg:min-w-75 shadow-sm hover:shadow-xl transition duration-300"
            >
              <figure>
                <Image
                  src={animal.image}
                  alt={animal.name}
                  className="object-cover w-full h-55"
                  width={300}
                  height={220}
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>

                <p>
                  {animal.description.length > 100
                    ? animal.description.substring(0, 100) + "..."
                    : animal.description}
                </p>

                <div className="mt-2">
                  <span className="font-bold text-lg text-green-950">
                    {animal.location}
                  </span>
                </div>
                <span className="badge bg-gray-500 text-white">
                  {animal.type}
                </span>

                <div className="card-actions justify-end mt-4">
                  <Link href="/animals">
                    <button className="btn bg-green-800 text-white hover:bg-green-700 rounded-4xl">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Collection;
