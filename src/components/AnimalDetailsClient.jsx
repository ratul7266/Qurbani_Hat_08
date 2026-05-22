"use client";

import { toast } from "react-hot-toast";
import Image from "next/image";

const AnimalDetailsClient = ({ animal }) => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="relative w-full h-125 rounded-2xl overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-5">

          <h2 className="text-5xl font-bold">
            {animal.name}
          </h2>

          <p className="text-gray-600 text-lg">
            {animal.description}
          </p>

          <div className="space-y-2 text-lg">
            <p><b>Category:</b> {animal.category}</p>
            <p><b>Breed:</b> {animal.breed}</p>
            <p><b>Weight:</b> {animal.weight} KG</p>
            <p><b>Age:</b> {animal.age} Years</p>
            <p><b>Location:</b> {animal.location}</p>
          </div>

          <h2 className="text-4xl font-bold text-green-700">
            ৳ {animal.price.toLocaleString()}
          </h2>

          <div className="flex gap-4 pt-5">

            <button
              onClick={() => toast.success("Added to Cart")}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Add to Cart
            </button>

            <button
              onClick={() => toast.success("Proceeding to Checkout")}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition duration-300"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AnimalDetailsClient;