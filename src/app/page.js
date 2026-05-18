import AnimalsCard from "@/components/AnimalsCard";
import Banner from "@/components/Banner";
import Collection from "@/components/Collection";


export default function Home() {
  return (
    <div>
      <div>
        <Banner />
        <Collection />
        <AnimalsCard />
      </div>
    </div>
  );
}
