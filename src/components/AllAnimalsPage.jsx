import AllAnimalsClient from "@/components/AllAnimalsClient";  // ← এই line টা ছিল না
import animals from "@/data/animals.json";

const AllAnimalsPage = () => {
  return <AllAnimalsClient animals={animals} />;
};

export default AllAnimalsPage;