"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Dropdown, Header, Label } from "@heroui/react";
import { useState } from "react";

const AllAnimalsClient = ({ animals }) => {
  const [selected, setSelected] = useState(new Set());
  const selectedKey = selected instanceof Set ? Array.from(selected)[0] : null;

  const handleSelectionChange = (keys) => {
    const value = Array.from(keys)[0];
    if (value === "reset") {
      setSelected(new Set());
      return;
    }
    setSelected(keys);
  };

  const getLabel = () => {
    if (selectedKey === "low") return "Low → High Price";
    if (selectedKey === "high") return "High → Low Price";
    return "Sort By";
  };

  const sortedAnimals = [...animals].sort((a, b) => {
    if (selectedKey === "low") return a.price - b.price;
    if (selectedKey === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-3/4 mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">All Animals</h2>

      <div className="flex justify-left my-6">
        <Dropdown>
          <Button
            aria-label="Sort menu"
            variant="secondary"
            className="relative overflow-hidden
                      bg-linear-to-r from-green-700 via-green-600 to-green-800
                      text-white font-semibold
                      px-6 py-2.5 rounded-xl
                      shadow-lg shadow-green-900/30
                      transition-all duration-300
                      hover:scale-[1.03] hover:shadow-xl
                      active:scale-95"
          >
            {getLabel()}
          </Button>

          <Dropdown.Popover className="min-w-[256px]">
            <Dropdown.Menu
              selectedKeys={selected}
              selectionMode="single"
              onSelectionChange={handleSelectionChange}
            >
              <Dropdown.Section>
                <Header>Sort by:</Header>
                <Dropdown.Item id="reset">
                  <Dropdown.ItemIndicator />
                  <Label>Reset</Label>
                </Dropdown.Item>
                <Dropdown.Item id="low">
                  <Dropdown.ItemIndicator />
                  <Label>Low to High Price</Label>
                </Dropdown.Item>
                <Dropdown.Item id="high">
                  <Dropdown.ItemIndicator />
                  <Label>High to Low Price</Label>
                </Dropdown.Item>
              </Dropdown.Section>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAnimals.map((animal) => (
          <div
            key={animal.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
              />
              {animal.featured && (
                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
              {animal.collection && (
                <span className="absolute top-3 right-3 bg-green-700 text-white text-sm px-3 py-1 rounded-full">
                  Collection
                </span>
              )}
            </div>

            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{animal.name}</h3>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                  {animal.category}
                </span>
              </div>
              <p className="text-gray-600">Breed: {animal.breed}</p>
              <p className="text-gray-600">Weight: {animal.weight} KG</p>
              <p className="text-gray-600">Age: {animal.age} Years</p>
              <p className="text-gray-600 line-clamp-1">📍 {animal.location}</p>
              <p className="text-gray-500 text-sm line-clamp-2">
                {animal.description}
              </p>

              <div className="flex justify-between items-center pt-2">
                <h2 className="text-2xl font-bold text-green-700">
                  ৳ {animal.price.toLocaleString()}
                </h2>
                <Link href={`/animals/${animal.id}`}>
                  <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-xl">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsClient;